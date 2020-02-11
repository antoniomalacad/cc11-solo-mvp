exports.up = function(knex) {
  return knex.schema.createTable("questions", table => {
    table.increments().index();
    table.text("question").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("questions");
};
