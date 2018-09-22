const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//init
const app = express();

//database-config
const db = require("./config/keys").mongoURI;

//bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect to Mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.log(error));

app.get("/", (req, res) => res.send("Hello from database land"));

//set up routes
app.use(require("./routes"));

//fire it up!
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
