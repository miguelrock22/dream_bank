import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';

export interface IUser {
  id?: string;
  document: string;
  name?: string;
  password?: string;
}

export class User extends BaseModel implements IUser {
  public static readonly ModelName: string = 'User';
  public static readonly ModelNamePlural: string = 'Users';
  public static readonly TableName: string = 'Users';
  public static readonly DefaultScope: FindOptions = {};

  public id!: string;
  public document!: string;
  public name: string;
  public password: string;

  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          comment: 'Id of the instance',
        },
        document: new DataTypes.STRING(15),
        name: new DataTypes.STRING(100),
        password: new DataTypes.STRING(100),
      },
      {
        sequelize: sequelize,
        tableName: this.TableName,
        name: {
          singular: this.ModelName,
          plural: this.ModelNamePlural,
        },
        defaultScope: this.DefaultScope,
        comment: 'Model for the public accessible data of an user',
      },
    );
  }

  public static setAssociations(modelCtors: {
    [modelName: string]: ModelCtor<Model>;
  }) {
    // Associations
  }
}