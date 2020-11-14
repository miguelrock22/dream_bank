import { QueryInterface, DataTypes } from 'sequelize';
import { User } from '../models/User';

export class UserSeeder {
  public async up(Query: QueryInterface) {
    try {
      Query.bulkInsert(User.tableName, [{
        document: "1036",
        name: "Miguel Montoya",
        password: "123"
      }, {
        document: "6553",
        name: "Angel García",
        password: "123"
      },
      ]);
    } catch (e) {
      Promise.reject(e);
    }
  }
  
  public async down(Query: QueryInterface) {
    try {
      Query.delete(new User(), User.tableName, {});
    } catch (e) {
      Promise.reject(e);
    }
  }
}
