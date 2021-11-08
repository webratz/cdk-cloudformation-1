// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * CloudFormation equivalent of ad_computer
 *
 * @schema CfnComputerProps
 */
export interface CfnComputerProps {
  /**
   * @schema CfnComputerProps#Container
   */
  readonly container?: string;

  /**
   * @schema CfnComputerProps#Description
   */
  readonly description?: string;

  /**
   * @schema CfnComputerProps#Name
   */
  readonly name: string;

  /**
   * @schema CfnComputerProps#Pre2kname
   */
  readonly pre2Kname?: string;

}

/**
 * Converts an object of type 'CfnComputerProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnComputerProps(obj: CfnComputerProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Container': obj.container,
    'Description': obj.description,
    'Name': obj.name,
    'Pre2kname': obj.pre2Kname,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `TF::AD::Computer`
 *
 * @cloudformationResource TF::AD::Computer
 * @stability external
 * @link https://github.com/iann0036/cfn-tf-custom-types.git
 */
export class CfnComputer extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "TF::AD::Computer";

  /**
   * Resource props.
   */
  public readonly props: CfnComputerProps;

  /**
   * Attribute `TF::AD::Computer.tfcfnid`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrTfcfnid: string;
  /**
   * Attribute `TF::AD::Computer.Dn`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrDn: string;
  /**
   * Attribute `TF::AD::Computer.Guid`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrGuid: string;
  /**
   * Attribute `TF::AD::Computer.Id`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrId: string;
  /**
   * Attribute `TF::AD::Computer.Sid`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrSid: string;

  /**
   * Create a new `TF::AD::Computer`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnComputerProps) {
    super(scope, id, { type: CfnComputer.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnComputerProps(props)! });

    this.props = props;

    this.attrTfcfnid = cdk.Token.asString(this.getAtt('tfcfnid'));
    this.attrDn = cdk.Token.asString(this.getAtt('Dn'));
    this.attrGuid = cdk.Token.asString(this.getAtt('Guid'));
    this.attrId = cdk.Token.asString(this.getAtt('Id'));
    this.attrSid = cdk.Token.asString(this.getAtt('Sid'));
  }
}