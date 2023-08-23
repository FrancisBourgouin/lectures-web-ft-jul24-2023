const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const generateJokeHelpers = require("./helpers/jokeHelpers");
const { fetchAllAuthors, fetchAuthorById } = require("./helpers/authorHelpers");

const client = require("./helpers/dbHelpers");
const { fetchAllJokes, fetchJokeById, insertJoke } = generateJokeHelpers(client);

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/jokes", (req, res) => {
  fetchAllJokes()
    .then((rows) => res.json(rows))
    .catch((err) => res.json(err));
});

app.get("/api/jokes/:joke_id", (req, res) => {
  const { joke_id } = req.params;

  fetchJokeById(joke_id)
    .then((joke) => res.json(joke))
    .catch((err) => res.json(err));
});

app.get("/jokes/new", (req, res) => {
  fetchAllAuthors(client)
    .then((authors) => {
      console.log(authors);
      const templateVars = { authors };

      res.render("new_joke", templateVars);
    })
    .catch((err) => res.json(err));
});

app.post("/api/jokes", (req, res) => {
  const joke = req.body;

  insertJoke(joke)
    .then((joke) => res.json(joke))
    .catch((err) => res.json(err));
});

app.get("/api/authors/:author_id", (req, res) => {
  fetchAuthorById(client, req.params.author_id)
    .then((author) => res.json(author))
    .catch((err) => res.json(err));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
