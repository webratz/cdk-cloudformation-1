import { PolicyStatement } from '@aws-cdk/aws-iam';
import { GithubActionsIdentityProvider, GithubActionsRole } from 'aws-cdk-github-oidc';
import { Component, TypeScriptProject } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { AwsInfrastructure } from './aws-infrastructure';

export class UpdateRegistry extends Component {
  constructor(project: TypeScriptProject) {
    super(project);

    const task = project.addTask('update-registry', {
      exec: 'node registry/refresh.js',
    });

    const infra = new AwsInfrastructure(project, {
      name: 'github-connect',
      account: '037840909260',
      region: 'us-east-1',
    });

    const stack = infra.stack;

    const externalId = 'cdk-cloudformation-update-registry';
    const roleName = 'github-cdklabs-cdk-cloudformation';
    const provider = new GithubActionsIdentityProvider(stack, 'GithubActionsIdentityProvider');
    const role = new GithubActionsRole(stack, 'GithubActionsRole', {
      roleName: roleName,
      owner: 'cdklabs',
      repo: 'cdk-cloudformation',
      provider: provider,
      description: 'Allows cdklabs/cdk-cloudformation to query the CloudFormation registry',
      externalIds: [externalId],
      filter: 'ref:refs/heads/main',
    });

    role.addToPolicy(new PolicyStatement({
      actions: ['cloudformation:ListTypes', 'cloudformation:DescribeType'],
      resources: ['*'],
    }));

    const workflow = project.github?.addWorkflow('update-registry');
    workflow?.addJobs({
      update: {
        permissions: {
          'id-token': JobPermission.WRITE,
          'contents': JobPermission.WRITE,
        } as any,
        runsOn: 'ubuntu-latest',
        steps: [
          { uses: 'actions/checkout@v2' },
          {
            uses: 'aws-actions/configure-aws-credentials@v1',
            with: {
              'role-to-assume': `arn:aws:iam::${infra.stack.account}:role/${roleName}`,
              'aws-region': infra.stack.region,
              'role-session-name': 'github-automation',
              'role-external-id': externalId,
            },
          },
          { run: 'yarn install' },
          { run: this.project.runTaskCommand(task) },
        ],
      },
    });
  }
}
