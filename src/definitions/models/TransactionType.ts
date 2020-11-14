import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';

export interface ITransactionType {
  id?: string;
  name?: string;
}

export class TransactionType extends BaseModel implements ITransactionType {
  public static readonly ModelName: string = 'TransactionType';
  public static readonly ModelNamePlural: string = 'TransactionTypes';
  public static readonly TableName: string = 'TransactionTypes';
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
        sequelize: sequelize,
        tableName: this.TableName,
        name: {
          singular: this.ModelName,
          plural: this.ModelNamePlural,
        },
        defaultScope: this.DefaultScope,
        comment: 'Model for the public accessible data of an TransactionType',
      },
    );
  }

  public static setAssociations(modelCtors: {
    [modelName: string]: ModelCtor<Model>;
  }) {
    // Associations
  }
}