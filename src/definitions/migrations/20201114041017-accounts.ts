import { QueryInterface, DataTypes } from 'sequelize';
import { Account } from '../models/Account';


export async function up(query: QueryInterface) {
  try {
    return query.createTable(Account.TableName, {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        comment: 'Id of the instance',
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        comment: 'foreign key user',
        references: {
            model: "User",
            key: "id"
        }
      },
      typeId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        comment: 'foreign key type',
        references: {
            model: "AccountType",
            key: "id"
        }
      },
      name: {
        type: new DataTypes.STRING(255),
        allowNull: true,
        comment: 'Name of the user',
      }
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * function that sequelize-cli runs if you want to remove this migration from your database
 * */
export async function down(query: QueryInterface) {
  try {
    return query.dropTable(Account.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}