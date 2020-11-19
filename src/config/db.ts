import { Sequelize } from 'sequelize';
import * as dotenv from "dotenv";
import { dirname } from 'path';

dotenv.config({ path: __dirname+ '/../../.env' });

let sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        define: {
          underscored: true
        }
    });
export {sequelize};