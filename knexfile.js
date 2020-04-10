require("dotenv").config(); //access to .env variables

const database = {
  client: 'pg',
      connection: {
          host: 'localhost',
          database: 'dev'
      },
      migrations: {
          directory: './database/migrations'
      },
      seeds: { 
          directory: './database/seeds' 
      },
  };

  module.exports = {

    development:{
      ...database,
      connection: {
        port: process.env.POSTGRES_PORT,
        database: 'dev',
        user: process.env.USER,
        password: process.env.PASSWORD
      },
      tableName: 'knex_migrations'
    },

    production: {
      ...database,
      connection: process.env.DATABASE_URL,
      tableName: 'knex_migrations'
    }
  };
