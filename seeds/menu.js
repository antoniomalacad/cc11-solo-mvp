const menuData = require("./menu.json");

exports.seed = function(knex) {
  return knex("menu")
    .del()
    .then(function() {
      return knex("menu").insert(
        menuData.map(entry => {
          return {
            id: entry.id,
            name: entry.name,
            description: entry.description
          };
        })
      );
    });
};
