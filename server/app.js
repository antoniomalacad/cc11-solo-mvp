// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/menus", async (req, res) => {
  try {
    const menu = await db.select().table("menu");
    const result = Object.values(menu);
    res.json(result);
  } catch (err) {
    console.error("Error loading menu!", err);
    res.sendStatus(500);
  }
});

app.get("/api/menus/:id", async (req, res) => {
  const menuNum = req.params.id;
  try {
    const menu = await db
      .select("name", "description")
      .table("menu")
      .where({ id: menuNum });
    const result = Object.values(menu);
    res.json(result);
  } catch (err) {
    console.error("Error loading menu!", err);
    res.sendStatus(500);
  }
});

app.get("/api/questions", async (req, res) => {
  try {
    const questions = await db.select().table("questions");
    const result = Object.values(questions);
    res.json(result);
  } catch (err) {
    console.error("Error loading questions!", err);
    res.sendStatus(500);
  }
});

app.get("/api/questions/:q_id", async (req, res) => {
  const questionNum = req.params.q_id;
  try {
    const questions = await db
      .select("question")
      .table("questions")
      .where({
        id: questionNum
      });
    const result = Object.values(questions);
    res.json(result);
  } catch (err) {
    console.error("Error loading questions!", err);
    res.sendStatus(500);
  }
});

app.get("/api/options", async (req, res) => {
  try {
    const options = await db.select().table("options");
    const result = Object.values(options);
    res.json(result);
  } catch (err) {
    console.error("Error loading options!", err);
    res.sendStatus(500);
  }
});

app.get("/api/options/:q_id", async (req, res) => {
  const questionNum = req.params.q_id;
  try {
    const options = await db
      .select("id", "option")
      .table("options")
      .where({ q_id: questionNum });
    const result = Object.values(options);
    res.json(result);
  } catch (err) {
    console.error("Error loading options!", err);
    res.sendStatus(500);
  }
});

app.get("/api/responses", async (req, res) => {
  try {
    const responses = await db.select().table("responses");
    const result = Object.values(responses);
    res.json(result);
  } catch (err) {
    console.error("Error loading responses!", err);
    res.sendStatus(500);
  }
});

module.exports = app;
