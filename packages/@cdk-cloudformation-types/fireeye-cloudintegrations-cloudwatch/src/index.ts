// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * This Resource Type will create necessary resources in your AWS account to forward cloudwatch logs to FireEye Helix. Visit FireEye Cloud Integration Portal for more info and to generate a pre-populated CloudFormation Template
 *
 * @schema CfnCloudwatchProps
 */
export interface CfnCloudwatchProps {
  /**
   * Helix API Key
   *
   * @schema CfnCloudwatchProps#ApiKey
   */
  readonly apiKey: string;

  /**
   * CloudWatch LogGroup to monitor
   *
   * @schema CfnCloudwatchProps#LogGroupName
   */
  readonly logGroupName: string;

  /**
   * LogGroup AWS region
   *
   * @schema CfnCloudwatchProps#Region
   */
  readonly region: string;

  /**
   * Lambda Execution role
   *
   * @schema CfnCloudwatchProps#ExecRole
   */
  readonly execRole: string;

  /**
   * Helix API upload URL
   *
   * @schema CfnCloudwatchProps#HelixUploadUrl
   */
  readonly helixUploadUrl: string;

}

/**
 * Converts an object of type 'CfnCloudwatchProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnCloudwatchProps(obj: CfnCloudwatchProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiKey': obj.apiKey,
    'LogGroupName': obj.logGroupName,
    'Region': obj.region,
    'ExecRole': obj.execRole,
    'HelixUploadUrl': obj.helixUploadUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `FireEye::CloudIntegrations::Cloudwatch`
 *
 * @cloudformationResource FireEye::CloudIntegrations::Cloudwatch
 * @stability external
 * @link http://unknown-url
 */
export class CfnCloudwatch extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "FireEye::CloudIntegrations::Cloudwatch";

  /**
   * Resource props.
   */
  public readonly props: CfnCloudwatchProps;

  /**
   * Attribute `FireEye::CloudIntegrations::Cloudwatch.primaryIdentifier`
   * @link http://unknown-url
   */
  public readonly attrPrimaryIdentifier: string;

  /**
   * Create a new `FireEye::CloudIntegrations::Cloudwatch`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnCloudwatchProps) {
    super(scope, id, { type: CfnCloudwatch.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnCloudwatchProps(props)! });

    this.props = props;

    this.attrPrimaryIdentifier = cdk.Token.asString(this.getAtt('primaryIdentifier'));
  }
}