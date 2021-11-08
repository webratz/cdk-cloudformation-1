// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * Uses the Aurora Data API to execute SQL and enforce a schema within a database cluster. Currently only supports Aurora Postgres.
 *
 * @schema CfnSchemaProps
 */
export interface CfnSchemaProps {
  /**
   * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
   *
   * @schema CfnSchemaProps#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * The name or ARN of the secret that enables access to the DB cluster.
   *
   * @schema CfnSchemaProps#SecretArn
   */
  readonly secretArn: string;

  /**
   * An array of databases to manage within the cluster.
   *
   * @schema CfnSchemaProps#Databases
   */
  readonly databases?: Database[];

  /**
   * An array of SQL statements to execute within the postgres database.
   *
   * @schema CfnSchemaProps#SQL
   */
  readonly sql?: string[];

  /**
   * An array of users within the cluster.
   *
   * @schema CfnSchemaProps#Users
   */
  readonly users?: User[];

  /**
   * Whether arbitrary SQL statements are executed once (IDEMPOTENT), or on every update (RUN_ONCE).
   *
   * @schema CfnSchemaProps#SQLIdempotency
   */
  readonly sqlIdempotency?: CfnSchemaPropsSqlIdempotency;

}

/**
 * Converts an object of type 'CfnSchemaProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnSchemaProps(obj: CfnSchemaProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'SecretArn': obj.secretArn,
    'Databases': obj.databases?.map(y => toJson_Database(y)),
    'SQL': obj.sql?.map(y => y),
    'Users': obj.users?.map(y => toJson_User(y)),
    'SQLIdempotency': obj.sqlIdempotency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Database
 */
export interface Database {
  /**
   * The name of the database. Creates the database if it doesn't exist.
   *
   * @schema Database#Name
   */
  readonly name: string;

  /**
   * An array of tables to manage within the database.
   *
   * @schema Database#Tables
   */
  readonly tables?: Table[];

  /**
   * An array of extensions to enable within the database.
   *
   * @schema Database#Extensions
   */
  readonly extensions?: string[];

  /**
   * An array of SQL statements to execute within the database.
   *
   * @schema Database#SQL
   */
  readonly sql?: string[];

}

/**
 * Converts an object of type 'Database' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Database(obj: Database | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Tables': obj.tables?.map(y => toJson_Table(y)),
    'Extensions': obj.extensions?.map(y => y),
    'SQL': obj.sql?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema User
 */
export interface User {
  /**
   * The username of the user. Creates the user/role.
   *
   * @schema User#Name
   */
  readonly name: string;

  /**
   * The Secrets Manager secret ID or ARN of the credentials to set for the user ('password' field of the JSON secret value).
   *
   * @schema User#SecretId
   */
  readonly secretId?: string;

  /**
   * Whether to give the user rds_superuser privileges.
   *
   * @schema User#SuperUser
   */
  readonly superUser?: boolean;

  /**
   * An array of grants to assign to the user.
   *
   * @schema User#Grants
   */
  readonly grants?: Grant[];

}

/**
 * Converts an object of type 'User' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_User(obj: User | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SecretId': obj.secretId,
    'SuperUser': obj.superUser,
    'Grants': obj.grants?.map(y => toJson_Grant(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Whether arbitrary SQL statements are executed once (IDEMPOTENT), or on every update (RUN_ONCE).
 *
 * @schema CfnSchemaPropsSqlIdempotency
 */
export enum CfnSchemaPropsSqlIdempotency {
  /** IDEMPOTENT */
  IDEMPOTENT = 'IDEMPOTENT',
  /** RUN_ONCE */
  RUN_ONCE = 'RUN_ONCE',
}

/**
 * @schema Table
 */
export interface Table {
  /**
   * The name of the table. Creates the table if it doesn't exist.
   *
   * @schema Table#Name
   */
  readonly name: string;

  /**
   * An array of columns to manage within the database.
   *
   * @schema Table#Columns
   */
  readonly columns?: Column[];

  /**
   * @schema Table#PrimaryKey
   */
  readonly primaryKey?: PrimaryKey;

}

/**
 * Converts an object of type 'Table' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Table(obj: Table | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Columns': obj.columns?.map(y => toJson_Column(y)),
    'PrimaryKey': toJson_PrimaryKey(obj.primaryKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Grant
 */
export interface Grant {
  /**
   * The name of the database. If the grant Table field is omitted, this represents a database grant, otherwise represents a table grant.
   *
   * @schema Grant#Database
   */
  readonly database: string;

  /**
   * The name of the table. The grant Database field must specify the containing database and the database must be specified in the Databases section of the base of the type.
   *
   * @schema Grant#Table
   */
  readonly table?: string;

  /**
   * An array of privileges to grant (CONNECT, SELECT, etc.).
   *
   * @schema Grant#Privileges
   */
  readonly privileges: string[];

}

/**
 * Converts an object of type 'Grant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Grant(obj: Grant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Database': obj.database,
    'Table': obj.table,
    'Privileges': obj.privileges?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Column
 */
export interface Column {
  /**
   * The name of the column. Creates the column if it doesn't exist. Cannot be updated after creation.
   *
   * @schema Column#Name
   */
  readonly name: string;

  /**
   * The type of the column. Cannot be updated after creation.
   *
   * @schema Column#Type
   */
  readonly type: string;

  /**
   * Whether the column is nullable. Cannot be updated after creation.
   *
   * @schema Column#Nullable
   */
  readonly nullable?: boolean;

  /**
   * The default value of the column. Cannot be updated after creation.
   *
   * @schema Column#Default
   */
  readonly default?: string;

}

/**
 * Converts an object of type 'Column' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Column(obj: Column | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Nullable': obj.nullable,
    'Default': obj.default,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PrimaryKey
 */
export interface PrimaryKey {
  /**
   * The name of the primary key. Cannot be updated after creation.
   *
   * @schema PrimaryKey#Name
   */
  readonly name: string;

  /**
   * The type of the primary key. Cannot be updated after creation.
   *
   * @schema PrimaryKey#Type
   */
  readonly type: string;

  /**
   * The default value of the primary key. Cannot be updated after creation.
   *
   * @schema PrimaryKey#Default
   */
  readonly default?: string;

}

/**
 * Converts an object of type 'PrimaryKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PrimaryKey(obj: PrimaryKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Default': obj.default,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `Generic::Database::Schema`
 *
 * @cloudformationResource Generic::Database::Schema
 * @stability external
 * @link https://github.com/iann0036/cfn-types/tree/master/generic-database-schema
 */
export class CfnSchema extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Generic::Database::Schema";

  /**
   * Resource props.
   */
  public readonly props: CfnSchemaProps;

  /**
   * Attribute `Generic::Database::Schema.ExecutionId`
   * @link https://github.com/iann0036/cfn-types/tree/master/generic-database-schema
   */
  public readonly attrExecutionId: string;

  /**
   * Create a new `Generic::Database::Schema`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnSchemaProps) {
    super(scope, id, { type: CfnSchema.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnSchemaProps(props)! });

    this.props = props;

    this.attrExecutionId = cdk.Token.asString(this.getAtt('ExecutionId'));
  }
}