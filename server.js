const express = require("express");
const mongoose = require("mongoose");
// const routes = require('./routes')
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(routes);
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});