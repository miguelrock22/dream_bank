import { QueryInterface, DataTypes } from 'sequelize';
import { User } from '../models/User';


export async function up(query: QueryInterface) {
  try {
    return query.createTable(User.TableName, {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        comment: 'Id of the instance',
      },
      document: {
        type: new DataTypes.STRING(15),
        allowNull: false,
        unique: true,
        comment: 'Unique document of the user',
      },
      name: {
        type: new DataTypes.STRING(255),
        allowNull: true,
        comment: 'Name of the user',
      },
      password: {
        type: new DataTypes.STRING(255),
        allowNull: true,
        comment: 'Password of the user',
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
    return query.dropTable(User.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}