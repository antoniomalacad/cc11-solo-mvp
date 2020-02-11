const questionsData = require("./questions.json");

exports.seed = function(knex) {
  return knex("questions")
    .del()
    .then(function() {
      return knex("questions").insert(
        questionsData.map(entry => {
          return {
            id: entry.id,
            question: entry.question
          };
        })
      );
    });
};
