exports.up = function(knex) {
  return knex.schema.alterTable("options", table => {
    table.integer("next_q");
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("options", table => {
    table.dropColumn("next_q");
  });
};
