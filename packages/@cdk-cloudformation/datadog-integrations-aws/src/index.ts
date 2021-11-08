// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * Datadog AWS Integration 2.1.0
 *
 * @schema CfnAwsProps
 */
export interface CfnAwsProps {
  /**
   * Your AWS Account ID without dashes.
   *
   * @schema CfnAwsProps#AccountID
   */
  readonly accountId?: string;

  /**
   * Your Datadog role delegation name.
   *
   * @schema CfnAwsProps#RoleName
   */
  readonly roleName?: string;

  /**
   * If your AWS account is a GovCloud or China account, enter the corresponding Access Key ID.
   *
   * @schema CfnAwsProps#AccessKeyID
   */
  readonly accessKeyId?: string;

  /**
   * The array of EC2 tags (in the form key:value) defines a filter that Datadog uses when collecting metrics from EC2.
   *
   * @schema CfnAwsProps#FilterTags
   */
  readonly filterTags?: string[];

  /**
   * Array of tags (in the form key:value) to add to all hosts and metrics reporting through this integration.
   *
   * @schema CfnAwsProps#HostTags
   */
  readonly hostTags?: string[];

  /**
   * An object (in the form {"namespace1":true/false, "namespace2":true/false}) that enables or disables metric collection for specific AWS namespaces for this AWS account only.
   *
   * @schema CfnAwsProps#AccountSpecificNamespaceRules
   */
  readonly accountSpecificNamespaceRules?: any;

  /**
   * The name of the AWS SecretsManager secret created in your account to hold this integration's `external_id`. Defaults to `DatadogIntegrationExternalID`. Cannot be referenced from created resource.
   *
   * @default DatadogIntegrationExternalID`. Cannot be referenced from created resource.
   * @schema CfnAwsProps#ExternalIDSecretName
   */
  readonly externalIdSecretName?: string;

}

/**
 * Converts an object of type 'CfnAwsProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnAwsProps(obj: CfnAwsProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountID': obj.accountId,
    'RoleName': obj.roleName,
    'AccessKeyID': obj.accessKeyId,
    'FilterTags': obj.filterTags?.map(y => y),
    'HostTags': obj.hostTags?.map(y => y),
    'AccountSpecificNamespaceRules': obj.accountSpecificNamespaceRules,
    'ExternalIDSecretName': obj.externalIdSecretName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `Datadog::Integrations::AWS`
 *
 * @cloudformationResource Datadog::Integrations::AWS
 * @stability external
 * @link http://unknown-url
 */
export class CfnAws extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Datadog::Integrations::AWS";

  /**
   * Resource props.
   */
  public readonly props: CfnAwsProps;

  /**
   * Attribute `Datadog::Integrations::AWS.IntegrationID`
   * @link http://unknown-url
   */
  public readonly attrIntegrationID: string;

  /**
   * Create a new `Datadog::Integrations::AWS`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnAwsProps) {
    super(scope, id, { type: CfnAws.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnAwsProps(props)! });

    this.props = props;

    this.attrIntegrationID = cdk.Token.asString(this.getAtt('IntegrationID'));
  }
}