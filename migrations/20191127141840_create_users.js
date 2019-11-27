
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users2', table => {
        table.increments('id').primary()
        table.string('cpf').notNull().unique()
        table.string('name').notNull()
        table.string('password').notNull()
        table.integer('creditos')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users2')
};
