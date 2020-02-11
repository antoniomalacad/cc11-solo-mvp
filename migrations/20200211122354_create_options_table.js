exports.up = function(knex) {
  return knex.schema.createTable("options", table => {
    table.increments().index();
    table.integer("q_id");

    table.text("option").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("options");
};
