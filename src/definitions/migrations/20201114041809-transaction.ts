import { QueryInterface, DataTypes } from 'sequelize';
import { Transaction } from '../models/Transaction';


export async function up(query: QueryInterface) {
  try {
    return query.createTable(Transaction.TableName, {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        comment: 'Id of the instance',
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        comment: 'foreign key account',
        references: {
            model: "Account",
            key: "id"
        }
      },
      typeId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        comment: 'foreign key Transactiontype',
        references: {
            model: "TransactionType",
            key: "id"
        }
      },
      description: {
        type: new DataTypes.STRING(100),
        allowNull: true,
        comment: 'Description of the transaction',
      },
      ammount:{
        type: new DataTypes.FLOAT(8,2),
        allowNull: true,
        comment: "Ammount of the transaction"
      },
      status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment: "Status of the transaction"
      },
      date: {
          type: new DataTypes.DATE(20),
          allowNull: false,
          comment: "Date of the transaction"
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
    return query.dropTable(Transaction.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}