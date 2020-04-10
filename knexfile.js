require("dotenv").config(); //access to .env variables

const database = {
  client: 'pg',
      connection: {
          host: 'localhost',
          database: 'dev'
      },
      migrations: {
          directory: './data/migrations'
      },
      seeds: { 
          directory: './data/seeds' 
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
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
