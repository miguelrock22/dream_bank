import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';

export interface IAccountType {
  id?: string;
  name?: string;
}

export class AccountType extends BaseModel implements IAccountType {
  public static readonly ModelName: string = 'AccountType';
  public static readonly ModelNamePlural: string = 'AccountTypes';
  public static readonly TableName: string = 'AccountTypes';
  public static readonly DefaultScope: FindOptions = {};

  public id!: string;
  public name: string;

  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          comment: 'Id of the instance',
        },
        name: new DataTypes.STRING(100),
      },
      {
        sequelize,
        tableName: this.TableName,
        name: {
          singular: this.ModelName,
          plural: this.ModelNamePlural,
        },
        defaultScope: this.DefaultScope,
        comment: 'Model for the public accessible data of an AccountType',
      },
    );
  }

  public static setAssociations(modelCtors: {
    [modelName: string]: ModelCtor<Model>;
  }) {
    // Associations
  }
}