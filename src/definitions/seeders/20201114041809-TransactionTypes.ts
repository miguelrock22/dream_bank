import { QueryInterface, DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';
import { TransactionType } from '../models/TransactionType';


export async function up(Query: QueryInterface) {
  try {
    return Query.bulkInsert(TransactionType.ModelNamePlural, [
      { id: uuid(), name: "Ingreso" },
      { id: uuid(), name: "Egreso" },
      { id: uuid(), name: "Impuesto" },
      { id: uuid(), name: "Solicitud de pedido" },
    ]);
  } catch (e) {
    Promise.reject(e);
  }
}


export async function down(Query: QueryInterface) {
  try {
    return Query.bulkDelete(TransactionType.tableName, null, {});
  } catch (e) {
    Promise.reject(e);
  }
}
