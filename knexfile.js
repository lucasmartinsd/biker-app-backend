module.exports = {

    client: 'postgresql',
    connection: {
      database: 'bikerapp',
      user:     'postgres',
      password: '130697'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
