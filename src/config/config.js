require('dotenv').config();
module.exports = {
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "db_dreambank",
    "dialectOptions":{
      "host": process.env.DB_HOST,
      "supportBigNumbers": true,
      "bigNumberStrings": true
    },
    "dialect":"postgres"
  },
  quoteIdentifiers: false
}
