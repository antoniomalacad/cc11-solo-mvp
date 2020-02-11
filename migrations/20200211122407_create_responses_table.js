exports.up = function(knex) {
  return knex.schema.createTable("responses", table => {
    table.increments().index();
    table.integer("o_id");

    table.text("choice").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("responses");
};
