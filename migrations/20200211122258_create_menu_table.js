exports.up = function(knex) {
  return knex.schema.createTable("menu", table => {
    table.increments().index();
    table.string("name").notNullable();
    table.text("description");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("menu");
};
