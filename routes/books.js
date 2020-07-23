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

router.post("/", (req, res) => {
  req.body.rate = parseFloat(req.body.rate);
  console.log(req.body);
  db.query("INSERT INTO book SET ?", [req.body], (err, results) => {
    if (err) {
      res.status(500).send("Erreur 500, pb SQL");
      console.log(err.sql);
      console.log(err.message);
      return;
    }
    res.send(results);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM book WHERE id=?", [id], (err, results) => {
    if (err) {
      res.status(500).send("Erreur 500, pb SQL");
      console.log(err.sql);
      console.log(err.message);
      return;
    }
    res.send(results);
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  db.query("UPDATE book SET ? WHERE id=?", [req.body, id], (err, results) => {
    if (err) {
      res.status(500).send("Erreur 500, pb SQL");
      console.log(err.sql);
      console.log(err.message);
      return;
    }
    if (!results) {
      res.status(400).send("Résultat vide");
      return;
    }
    res.send(results);
  });
});

module.exports = router;
