import { QueryInterface, DataTypes } from 'sequelize';
import { TransactionType } from '../models/TransactionType';


export async function up(query: QueryInterface) {
  try {
    return query.createTable(TransactionType.TableName, {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        comment: 'Id of the instance',
      },
      name: {
        type: new DataTypes.STRING(255),
        allowNull: true,
        comment: 'Name of the TransactionType',
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
    return query.dropTable(TransactionType.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}