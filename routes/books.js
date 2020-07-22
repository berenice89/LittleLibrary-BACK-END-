const express = require("express");
const router = express.Router();
const { db } = require("../conf");

router.get("/", (req, res) => {
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

router.get("/:id", (req, res) => {
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

module.exports = router;
