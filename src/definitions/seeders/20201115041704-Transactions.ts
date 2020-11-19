import { QueryInterface, Sequelize } from 'sequelize';
import { v4 as uuid } from 'uuid';
import { Transaction } from '../models/Transaction';
import { TransactionType } from '../models/TransactionType';
import { Account } from '../models/Account';


export async function up(Query: QueryInterface) {
  try {
    const accounts: any = await Query.select(Account, Account.ModelNamePlural);
    const transactionTypes: any = await Query.select(TransactionType, TransactionType.ModelNamePlural);

    return Query.bulkInsert(Transaction.ModelNamePlural, [{
      id: uuid(),
      accountId: accounts[0].dataValues.id,
      typeId: transactionTypes[0].dataValues.id,
      description: "Pago nomina",
      ammount: 600000,
      status: true,
      date: new Date()
    }, {
      id: uuid(),
      accountId: accounts[0].dataValues.id,
      typeId: transactionTypes[1].dataValues.id,
      description: "Mi cuenta",
      ammount: 600000,
      status: true,
      date: new Date()
    }, {
      id: uuid(),
      accountId: accounts[1].dataValues.id,
      typeId: transactionTypes[2].dataValues.id,
      description: "Mi cuenta",
      ammount: 600000,
      status: true,
      date: new Date()
    }
    ]);
  } catch (e) {
    Promise.reject(e);
  }
}

export async function down(Query: QueryInterface) {
  try {
    return Query.bulkDelete(Transaction.tableName, null, {});
  } catch (e) {
    Promise.reject(e);
  }
}
