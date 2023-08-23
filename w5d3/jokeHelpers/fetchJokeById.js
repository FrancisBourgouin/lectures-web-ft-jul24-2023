const { Client } = require("pg");

const providedId = process.argv[2];

const client = new Client({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "jokes",
  port: 5432,
});

const fetchJokeById = () => {
  const queryString = `
  SELECT 
    jokes.*,
    authors.name, authors.funny, authors.description
    FROM jokes
    JOIN authors 
      ON authors.id = jokes.author_id
    WHERE jokes.id = $1
  `;
  const queryArgs = [providedId];
  return client.query(queryString, queryArgs).then((result) => result.rows[0]);
};

const displayJoke = (joke) => {
  console.log("*** Beginning of the joke ***");
  console.log(`
    Joke #${joke.id}
    Question: ${joke.question}
    Answer: ${joke.answer}
    By: ${joke.name}, ${joke.description}
    `);
  console.log("*** End of joke ***");
};

const showTheBooboo = (err) => console.log(err);

const closeConnection = () => {
  client.end();
  console.log("Goodbye!");
};

client
  .connect()
  .then(fetchJokeById)
  .then(displayJoke)
  .catch(showTheBooboo)
  .finally(closeConnection);
