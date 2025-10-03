// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
/*
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
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
*/
  development: {
    client: 'postgresql',
    connection: {
      database: 'expressyourself',
      user:     'expressadmin',
      password: 'expressadmin',
      host: 'localhost',
      port: 5432
    },
    pool: { //Pool is a set of database connections that are ready to be used
      min: 2, //Minimum number of connections
      max: 10 //Maximum number of connections
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
