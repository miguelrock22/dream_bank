import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';
import { Account } from './Account';
import { TransactionType } from './TransactionType';

export interface ITransaction {
  id?: string;
  accountId?: number;
  typeId?: number;
  description?: string;
  ammount?: number;
  status?: boolean;
  date?: any;
}

export class Transaction extends BaseModel implements ITransaction {
  public static readonly ModelName: string = 'Transaction';
  public static readonly ModelNamePlural: string = 'Transactions';
  public static readonly TableName: string = 'Transactions';
  public static readonly DefaultScope: FindOptions = {};

  public id!: string;
  public accountId!: number;
  public typeId!: number;
  public description: string;
  public ammount: number;
  public status: boolean;
  public date: any;

  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          comment: 'Id of the instance',
        },
        accountId: DataTypes.UUID,
        typeId: DataTypes.UUID,
        description: new DataTypes.STRING(100),
        ammount: new DataTypes.FLOAT(8,2),
        status: DataTypes.BOOLEAN,
        date: new DataTypes.DATE(20)
      },
      {
        sequelize,
        tableName: this.TableName,
        name: {
          singular: this.ModelName,
          plural: this.ModelNamePlural,
        },
        defaultScope: this.DefaultScope,
        comment: 'Model for the public accessible data of an Transaction',
      },
    );
  }

  public static setAssociations(modelCtors: {
    [modelName: string]: ModelCtor<Model>;
  }) {
    // Associations
    Transaction.hasOne(Account);
    Transaction.hasOne(TransactionType);
  }
}