// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * This resource allows you to create and manage repositories within your
 * GitHub organization or personal account.
 *
 * @schema CfnRepositoryProps
 */
export interface CfnRepositoryProps {
  /**
   * Set to `false` to disable merge commits on the repository.
   *
   * @schema CfnRepositoryProps#AllowMergeCommit
   */
  readonly allowMergeCommit?: boolean;

  /**
   * Set to `false` to disable rebase merges on the repository.
   *
   * @schema CfnRepositoryProps#AllowRebaseMerge
   */
  readonly allowRebaseMerge?: boolean;

  /**
   * Set to `false` to disable squash merges on the repository.
   *
   * @schema CfnRepositoryProps#AllowSquashMerge
   */
  readonly allowSquashMerge?: boolean;

  /**
   * Set to `true` to archive the repository instead of deleting on destroy.
   *
   * @schema CfnRepositoryProps#ArchiveOnDestroy
   */
  readonly archiveOnDestroy?: boolean;

  /**
   * Specifies if the repository should be archived. Defaults to `false`. **NOTE** Currently, the API does not support unarchiving.
   *
   * @default false`. **NOTE** Currently, the API does not support unarchiving.
   * @schema CfnRepositoryProps#Archived
   */
  readonly archived?: boolean;

  /**
   * Set to `true` to produce an initial commit in the repository.
   *
   * @schema CfnRepositoryProps#AutoInit
   */
  readonly autoInit?: boolean;

  /**
   * (Deprecated: Use `github_branch_default` resource instead) The name of the default branch of the repository. **NOTE:** This can only be set after a repository has already been created,
   * and after a correct reference has been created for the target branch inside the repository. This means a user will have to omit this parameter from the
   * initial repository creation and create the target branch inside of the repository prior to setting this attribute.
   *
   * @schema CfnRepositoryProps#DefaultBranch
   */
  readonly defaultBranch?: string;

  /**
   * Automatically delete head branch after a pull request is merged. Defaults to `false`.
   *
   * @default false`.
   * @schema CfnRepositoryProps#DeleteBranchOnMerge
   */
  readonly deleteBranchOnMerge?: boolean;

  /**
   * A description of the repository.
   *
   * @schema CfnRepositoryProps#Description
   */
  readonly description?: string;

  /**
   * Use the [name of the template](https://github.com/github/gitignore) without the extension. For example, "Haskell".
   *
   * @schema CfnRepositoryProps#GitignoreTemplate
   */
  readonly gitignoreTemplate?: string;

  /**
   * Set to `true` to enable the (deprecated) downloads features on the repository.
   *
   * @schema CfnRepositoryProps#HasDownloads
   */
  readonly hasDownloads?: boolean;

  /**
   * Set to `true` to enable the GitHub Issues features
   * on the repository.
   *
   * @schema CfnRepositoryProps#HasIssues
   */
  readonly hasIssues?: boolean;

  /**
   * Set to `true` to enable the GitHub Projects features on the repository. Per the GitHub [documentation](https://developer.github.com/v3/repos/#create) when in an organization that has disabled repository projects it will default to `false` and will otherwise default to `true`. If you specify `true` when it has been disabled it will return an error.
   *
   * @schema CfnRepositoryProps#HasProjects
   */
  readonly hasProjects?: boolean;

  /**
   * Set to `true` to enable the GitHub Wiki features on
   * the repository.
   *
   * @schema CfnRepositoryProps#HasWiki
   */
  readonly hasWiki?: boolean;

  /**
   * URL of a page describing the project.
   *
   * @schema CfnRepositoryProps#HomepageUrl
   */
  readonly homepageUrl?: string;

  /**
   * Set to `true` to tell GitHub that this is a template repository.
   *
   * @schema CfnRepositoryProps#IsTemplate
   */
  readonly isTemplate?: boolean;

  /**
   * Use the [name of the template](https://github.com/github/choosealicense.com/tree/gh-pages/_licenses) without the extension. For example, "mit" or "mpl-2.0".
   *
   * @schema CfnRepositoryProps#LicenseTemplate
   */
  readonly licenseTemplate?: string;

  /**
   * The name of the repository.
   *
   * @schema CfnRepositoryProps#Name
   */
  readonly name: string;

  /**
   * Set to `true` to create a private repository.
   * Repositories are created as public (e.g. open source) by default.
   *
   * @schema CfnRepositoryProps#Private
   */
  readonly private?: boolean;

  /**
   * The list of topics of the repository.
   *
   * @schema CfnRepositoryProps#Topics
   */
  readonly topics?: string[];

  /**
   * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, visibility can also be `internal`. The `visibility` parameter overrides the `private` parameter.
   *
   * @schema CfnRepositoryProps#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema CfnRepositoryProps#VulnerabilityAlerts
   */
  readonly vulnerabilityAlerts?: boolean;

  /**
   * @schema CfnRepositoryProps#Pages
   */
  readonly pages?: PagesDefinition[];

  /**
   * @schema CfnRepositoryProps#Template
   */
  readonly template?: TemplateDefinition[];

}

/**
 * Converts an object of type 'CfnRepositoryProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnRepositoryProps(obj: CfnRepositoryProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowMergeCommit': obj.allowMergeCommit,
    'AllowRebaseMerge': obj.allowRebaseMerge,
    'AllowSquashMerge': obj.allowSquashMerge,
    'ArchiveOnDestroy': obj.archiveOnDestroy,
    'Archived': obj.archived,
    'AutoInit': obj.autoInit,
    'DefaultBranch': obj.defaultBranch,
    'DeleteBranchOnMerge': obj.deleteBranchOnMerge,
    'Description': obj.description,
    'GitignoreTemplate': obj.gitignoreTemplate,
    'HasDownloads': obj.hasDownloads,
    'HasIssues': obj.hasIssues,
    'HasProjects': obj.hasProjects,
    'HasWiki': obj.hasWiki,
    'HomepageUrl': obj.homepageUrl,
    'IsTemplate': obj.isTemplate,
    'LicenseTemplate': obj.licenseTemplate,
    'Name': obj.name,
    'Private': obj.private,
    'Topics': obj.topics?.map(y => y),
    'Visibility': obj.visibility,
    'VulnerabilityAlerts': obj.vulnerabilityAlerts,
    'Pages': obj.pages?.map(y => toJson_PagesDefinition(y)),
    'Template': obj.template?.map(y => toJson_TemplateDefinition(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PagesDefinition
 */
export interface PagesDefinition {
  /**
   * @schema PagesDefinition#Cname
   */
  readonly cname?: string;

  /**
   * @schema PagesDefinition#Source
   */
  readonly source?: SourceDefinition[];

}

/**
 * Converts an object of type 'PagesDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PagesDefinition(obj: PagesDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cname': obj.cname,
    'Source': obj.source?.map(y => toJson_SourceDefinition(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TemplateDefinition
 */
export interface TemplateDefinition {
  /**
   * @schema TemplateDefinition#Owner
   */
  readonly owner: string;

  /**
   * @schema TemplateDefinition#Repository
   */
  readonly repository: string;

}

/**
 * Converts an object of type 'TemplateDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TemplateDefinition(obj: TemplateDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Owner': obj.owner,
    'Repository': obj.repository,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SourceDefinition
 */
export interface SourceDefinition {
  /**
   * @schema SourceDefinition#Branch
   */
  readonly branch: string;

  /**
   * @schema SourceDefinition#Path
   */
  readonly path?: string;

}

/**
 * Converts an object of type 'SourceDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SourceDefinition(obj: SourceDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Branch': obj.branch,
    'Path': obj.path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `TF::GitHub::Repository`
 *
 * @cloudformationResource TF::GitHub::Repository
 * @stability external
 * @link https://github.com/iann0036/cfn-tf-custom-types.git
 */
export class CfnRepository extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "TF::GitHub::Repository";

  /**
   * Resource props.
   */
  public readonly props: CfnRepositoryProps;

  /**
   * Attribute `TF::GitHub::Repository.tfcfnid`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrTfcfnid: string;
  /**
   * Attribute `TF::GitHub::Repository.Etag`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrEtag: string;
  /**
   * Attribute `TF::GitHub::Repository.FullName`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrFullName: string;
  /**
   * Attribute `TF::GitHub::Repository.GitCloneUrl`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrGitCloneUrl: string;
  /**
   * Attribute `TF::GitHub::Repository.HtmlUrl`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrHtmlUrl: string;
  /**
   * Attribute `TF::GitHub::Repository.HttpCloneUrl`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrHttpCloneUrl: string;
  /**
   * Attribute `TF::GitHub::Repository.Id`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrId: string;
  /**
   * Attribute `TF::GitHub::Repository.NodeId`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrNodeId: string;
  /**
   * Attribute `TF::GitHub::Repository.RepoId`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrRepoId: number;
  /**
   * Attribute `TF::GitHub::Repository.SshCloneUrl`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrSshCloneUrl: string;
  /**
   * Attribute `TF::GitHub::Repository.SvnUrl`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrSvnUrl: string;

  /**
   * Create a new `TF::GitHub::Repository`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnRepositoryProps) {
    super(scope, id, { type: CfnRepository.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnRepositoryProps(props)! });

    this.props = props;

    this.attrTfcfnid = cdk.Token.asString(this.getAtt('tfcfnid'));
    this.attrEtag = cdk.Token.asString(this.getAtt('Etag'));
    this.attrFullName = cdk.Token.asString(this.getAtt('FullName'));
    this.attrGitCloneUrl = cdk.Token.asString(this.getAtt('GitCloneUrl'));
    this.attrHtmlUrl = cdk.Token.asString(this.getAtt('HtmlUrl'));
    this.attrHttpCloneUrl = cdk.Token.asString(this.getAtt('HttpCloneUrl'));
    this.attrId = cdk.Token.asString(this.getAtt('Id'));
    this.attrNodeId = cdk.Token.asString(this.getAtt('NodeId'));
    this.attrRepoId = cdk.Token.asNumber(this.getAtt('RepoId'));
    this.attrSshCloneUrl = cdk.Token.asString(this.getAtt('SshCloneUrl'));
    this.attrSvnUrl = cdk.Token.asString(this.getAtt('SvnUrl'));
  }
}