const express = require('express');
require('dotenv').config()
const app = express();
const routes = require("./routes");

console.log("hello")

var PORT = process.env.PORT || 3001;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("nba-web-stats/build"));
}

console.log("hello")
app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });