const { Client } = require("pg");

const client = new Client({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "jokes",
  port: 5432,
});

client.connect();

module.exports = client;
