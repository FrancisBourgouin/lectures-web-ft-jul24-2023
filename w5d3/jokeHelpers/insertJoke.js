const { Client } = require("pg");

// const question = process.argv[2];
// const answer = process.argv[3];
// const rating = process.argv[4];
// const author_id = process.argv[5];

const [, , question, answer, rating, author_id] = process.argv;

const client = new Client({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "jokes",
  port: 5432,
});

const insertJoke = () => {
  const queryString = `
  INSERT INTO 
    jokes (question, answer, rating, author_id) 
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const queryArgs = [question, answer, rating, author_id];
  return client.query(queryString, queryArgs).then((result) => result.rows[0]);
};

const displayJoke = (joke) => {
  console.log("*** Beginning of the joke ***");
  console.log(`
    Joke #${joke.id}
    Question: ${joke.question}
    Answer: ${joke.answer}
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
  .then(insertJoke)
  .then(displayJoke)
  .catch(showTheBooboo)
  .finally(closeConnection);
