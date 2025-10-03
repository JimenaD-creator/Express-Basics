/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('animals', function(table) {
        table.increments('id').unsigned().primary(); //Specify Primary Key column
        table.text('name').notNull();
        table.text('animal').notNull();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('animals');
  
};
