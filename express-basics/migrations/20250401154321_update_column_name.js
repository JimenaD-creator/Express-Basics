/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('animals', function(table) {
        table.renameColumn('animal', 'emoji'); // Rename the column 'animal' to 'emoji'
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('animals', function(table) {
        table.renameColumn('emoji', 'animal'); // Rename the column 'emoji' back to 'animal'
    });
  
};
