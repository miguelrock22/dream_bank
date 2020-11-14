import { QueryInterface } from 'sequelize';
import { Transaction } from '../models/Transaction';
import { TransactionType } from '../models/TransactionType';
import { Account } from '../models/Account';

export class TransactionSeeder{
  async up(Query: QueryInterface) {
    try {
      Query.bulkInsert(Transaction.tableName, [{
        accountId: await Account.findAll()[0].id,
        typeId: await TransactionType.findAll()[0].id,
        name: "Pago nomina",
        ammount: 600000,
        status: true,
        date: new Date()
      }, {
        accountId: await Account.findAll()[0].id,
        typeId: await TransactionType.findAll()[1].id,
        name: "Mi cuenta",
        ammount: 600000,
        status: true,
        date: new Date()
      }, {
        accountId: await Account.findAll()[1].id,
        typeId: await TransactionType.findAll()[2].id,
        name: "Mi cuenta",
        ammount: 600000,
        status: true,
        date: new Date()
      }
      ]);
    } catch (e) {
      Promise.reject(e);
    }
  }
  
  async down(Query: QueryInterface) {
    try {
      Query.delete(new Transaction(), Transaction.tableName, {});
    } catch (e) {
      Promise.reject(e);
    }
  }
}
