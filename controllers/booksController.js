const { pool } = require("../config.js");

const booksController = {
  async index(request, response) {
    // grab the book from the db using pool
    // and save the rows in a variable
    let { rows } = await pool.query("SELECT * FROM books");

    response.json({ books: rows });
  },
  show() {},
  async create(request, response) {
    const { author, title } = request.body;
    await pool.query("INSERT INTO books (author, title) VALUES ($1, $2)", [
      author,
      title,
    ]);
    response.status(201).json({ message: "The book was added" });
  },
  async delete(request, response) {
    const { id } = request.body;
    await pool.query("DELETE FROM books WHERE id = $1", [id]);
    // Book.destroy(id)
    response.status(202).json({ message: "Roger roger!" });
  },
};

module.exports = booksController;
