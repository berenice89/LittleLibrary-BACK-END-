const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/books", require("./routes/books"));

app.listen(5056, () => {
  console.log("API disponible sur localhost:5056");
});
