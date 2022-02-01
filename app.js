const express = require("express");
const { pool } = require("./config.js");
const booksController = require("./controllers/booksController");

const app = express();

app.use(express.json()).use(express.urlencoded({ extended: true }));

app
  .route("/books")
  .get(booksController.index)
  .post(booksController.create)
  .delete(booksController.delete);

app.listen(3001, () => console.warn("server is up and running"));
