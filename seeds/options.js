const optionsData = require("./options.json");

exports.seed = function(knex) {
  return knex("options")
    .del()
    .then(function() {
      return knex("options").insert(
        optionsData.map(entry => {
          return {
            id: entry.id,
            q_id: entry.q_id,
            option: entry.option,
            next_q: entry.next_q,
            drink_id: entry.drink_id
          };
        })
      );
    });
};
