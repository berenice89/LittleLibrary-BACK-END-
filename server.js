const express = require("express");
const app = express();
const { db } = require("./conf");

app.get("/", (req, res) => {
  res.send("REPONSE de GET sur /");
});

app.get("/hi/:user", (req, res) => {
  console.log("GET sur /hi/:user");
  const user = req.params.user;
  res.send(`Welcome ${user}`);
});

// Note : le msg s'affiche quand on tape : http://localhost:3000/order?code=66
app.get("/order", (req, res) => {
  console.log("GET sur /order");
  if (req.query.code === "66") {
    res.send(`Anéantissez les jedi`);
  } else {
    res.send("...");
  }
});

app.get("/books", (req, res) => {
  console.log("GET sur /books");
  // on fait une requête avec la base de données, on écrit la requête puis la fonction a executer qd la requete est terminée
  db.query(
    "SELECT id, title, author, date, rate, comment FROM book",
    (err, results, fields) => {
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

// sert à lancer le serveur :
app.listen(3000, () => {
  console.log("API disponible sur localhost:3000");
});
