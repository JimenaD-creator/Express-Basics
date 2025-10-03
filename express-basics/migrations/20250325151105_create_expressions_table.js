/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) { //This function is used to create a table in the database
    return knex.schema.createTable('expressions', function(table) {
        table.increments('id').unsigned().primary(); //Specify Primary Key column
        table.text('name').notNull();
        table.text('emoji').notNull();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {//This function is used to delete a table in the database
    return knex.schema.dropTable('expressions');
  
};
