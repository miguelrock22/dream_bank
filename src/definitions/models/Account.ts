import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';
import { User } from './User';
import { AccountType } from './AccountType';

export interface IAccount {
  id?: string;
  userId?: number;
  typeId?: number;
  name?: string;
}

export class Account extends BaseModel implements IAccount {
  public static readonly ModelName: string = 'Account';
  public static readonly ModelNamePlural: string = 'Accounts';
  public static readonly TableName: string = 'Accounts';
  public static readonly DefaultScope: FindOptions = {};

  public id!: string;
  public userId!: number;
  public typeId!: number;
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
        userId: new DataTypes.INTEGER(),
        typeId: new DataTypes.INTEGER(),
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
        comment: 'Model for the public accessible data of an Account',
      },
    );
  }

  public static setAssociations(modelCtors: {
    [modelName: string]: ModelCtor<Model>;
  }) {
    // Associations
    Account.hasOne(User);
    Account.hasOne(AccountType);
  }
}