exports.up = function(knex) {
  return knex.schema.alterTable("options", table => {
    table.integer("drink_id");
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("options", table => {
    table.dropColumn("drink_id");
  });
};
