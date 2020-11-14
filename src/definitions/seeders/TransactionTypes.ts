import { QueryInterface, DataTypes } from 'sequelize';
import { TransactionType } from '../models/TransactionType';

export class TransactionTypeSeeder{
  async up(Query: QueryInterface) {
    try {
      Query.bulkInsert(TransactionType.tableName, [
        { name: "Ingreso" },
        { name: "Egreso" },
        { name: "Impuesto" },
        { name: "Solicitud de pedido" },
      ]);
    } catch (e) {
      Promise.reject(e);
    }
  }
  
  
  async down(Query: QueryInterface) {
    try {
      Query.delete(new TransactionType(), TransactionType.tableName, {});
    } catch (e) {
      Promise.reject(e);
    }
  }
}
