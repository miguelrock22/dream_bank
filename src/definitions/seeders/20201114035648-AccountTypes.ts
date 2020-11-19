import { QueryInterface } from 'sequelize';
import { v4 as uuid } from 'uuid';
import { AccountType } from '../models/AccountType';

export async function up(Query: QueryInterface) {
  try {
    return Query.bulkInsert(AccountType.ModelNamePlural, [
      { id: uuid(), name: "Crédito ágil" },
      { id: uuid(), name: "Tarjeta de crédito" },
      { id: uuid(), name: "Cuenta de ahorros" },
      { id: uuid(), name: "Leasing de vivienda" },
    ]);
  } catch (e) {
    Promise.reject(e);
  }
}


export async function down(Query: QueryInterface) {
  try {
    return Query.bulkDelete(AccountType.tableName, null, {});
  } catch (e) {
    Promise.reject(e);
  }
}