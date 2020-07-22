const express = require("express");
const app = express();
const { db } = require("./conf");

app.get("/books", (req, res) => {
  db.query(
    "SELECT id, title, author, date, rate, comment FROM book",
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur 500, pb SQL");
        return;
      }
      if (!results) {
        res.status(400).send("Résultat vide");
        return;
      }
      res.send(results);
    }
  );
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT id, title, author, date, rate, comment FROM book WHERE id=?",
    [id],
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur 500, pb SQL");
        return;
      }
      if (!results) {
        res.status(400).send("Résultat vide");
        return;
      }
      res.send(results);
    }
  );
});

app.listen(3000, () => {
  console.log("API disponible sur localhost:3000");
});
