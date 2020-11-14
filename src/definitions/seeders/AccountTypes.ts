import { QueryInterface, DataTypes } from 'sequelize';
import { AccountType } from '../models/AccountType';

export class AccountTypeSeeder{
  async up(Query: QueryInterface) {
    try {
      Query.bulkInsert(AccountType.tableName, [
        { name: "Crédito ágil" },
        { name: "Tarjeta de crédito" },
        { name: "Cuenta de ahorros" },
        { name: "Leasing de vivienda" },
      ]);
    } catch (e) {
      Promise.reject(e);
    }
  }
  
  
  async down(Query: QueryInterface) {
    try {
      Query.delete(new AccountType(), AccountType.tableName, {});
    } catch (e) {
      Promise.reject(e);
    }
  }
}