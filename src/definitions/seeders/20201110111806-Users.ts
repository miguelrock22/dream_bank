import { QueryTypes } from 'sequelize';
import { QueryInterface } from 'sequelize';
import { v4 as uuid } from 'uuid';
import { User } from '../models/User';

export async function up(query: QueryInterface) {
  try{
    return query.bulkInsert("Users",[{
      id: uuid(),
      document: "asdasd",
      name: "123sd",
      password: "123"
    }],{})
  } catch (e) {
    Promise.reject(e);
  }
}

export async function down() {
  try {
    return User.destroy({});
  } catch (e) {
    Promise.reject(e);
  }
}