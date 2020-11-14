import { QueryInterface, DataTypes } from 'sequelize';
import { Account } from '../models/Account';
import { User } from '../models/User';
import { AccountType } from '../models/AccountType';

export class AccountSeeder{
  async up(Query: QueryInterface) {
    try {
      Query.bulkInsert(Account.tableName, [{
        userId: await User.findAll()[0].id,
        typeId: await AccountType.findAll()[0].id,
        name: "Pago nomina"
      }, {
        userId: await User.findAll()[0].id,
        typeId: await AccountType.findAll()[2].id,
        name: "Pago nomina"
      }, {
        userId: await User.findAll()[1].id,
        typeId: await AccountType.findAll()[2].id,
        description: "Mi cuenta"
      }
      ]);
    } catch (e) {
      Promise.reject(e);
    }
  }

  async down(Query: QueryInterface) {
    try {
      Query.delete(new Account(), Account.tableName, {});
    } catch (e) {
      Promise.reject(e);
    }
  }
}
