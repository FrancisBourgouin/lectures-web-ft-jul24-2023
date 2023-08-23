const { Client } = require("pg");

const client = new Client({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "jokes",
  port: 5432,
});

const fetchAllJokes = () => {
  const queryString = `
  SELECT
    jokes.*,
    authors.name, authors.funny, authors.description
    FROM jokes
    JOIN authors 
      ON authors.id = jokes.author_id
  `;
  return client.query(queryString).then((result) => result.rows);
};

const displayJokes = (jokeList) => {
  console.log("*** Beginning of jokes ***");
  for (const joke of jokeList) {
    console.log(`
    Joke #${joke.id}
    Question: ${joke.question}
    Answer: ${joke.answer}
    By: ${joke.name}, ${joke.description}
    `);
  }
  console.log("*** End of jokes ***");
};

const showTheBooboo = (err) => console.log(err);

const closeConnection = () => {
  client.end();
  console.log("Goodbye!");
};

client
  .connect()
  .then(fetchAllJokes)
  .then(displayJokes)
  .catch(showTheBooboo)
  .finally(closeConnection);

// Async code
// Callbacks
// Promises

// somePromise()
//   .then()
//   .then()
//   .then()
//   .then()

// Async / Await

// const returnValue = () => {
//   console.log("Hello!");

//   return 5;
// };

// const returnValueAgain = async () => {
//   console.log("Hello!");

//   return 5;
// };

// console.log(returnValueAgain() + 5);

// {
//   id: 12,
//   question: 'What do you call an indecisive bee?',
//   answer: ' A maybe.',
//   rating: 5,
//   author_id: 12,
//   name: 'Aldwin',
//   funny: true,
//   description: 'A student in sept 19'
// }
