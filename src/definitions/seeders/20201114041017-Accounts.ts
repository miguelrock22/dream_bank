import { QueryInterface, DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';
import { Account } from '../models/Account';
import { User } from '../models/User';
import { AccountType } from '../models/AccountType';

export async function up(Query: QueryInterface) {
  const users:any = await Query.select(User, User.ModelNamePlural);
  const types:any = await Query.select(AccountType, AccountType.ModelNamePlural);
  try {
    return Query.bulkInsert(Account.ModelNamePlural, [{
      id: uuid(),
      userId: users[0].dataValues.id,
      typeId: types[0].dataValues.id,
      name: "Pago nomina"
    }, {
      id: uuid(),
      userId: users[0].dataValues.id,
      typeId: types[2].dataValues.id,
      name: "Pago nomina"
    }, {
      id: uuid(),
      userId: users[0].dataValues.id,
      typeId: types[2].dataValues.id,
      name: "Mi cuenta"
    }
    ]);
  } catch (e) {
    Promise.reject(e);
  }
}

export async function down(Query: QueryInterface) {
  try {
    return Query.bulkDelete(Account.tableName, null, {});
  } catch (e) {
    Promise.reject(e);
  }
}