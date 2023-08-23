// Callbacks & Higher Order Functions
// HOF is a function that needs a callback to work
// HOF is a function that returns a function definition

const generateJokeHelpers = (client) => {
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

  const fetchJokeById = (providedId) => {
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

  const insertJoke = (joke) => {
    const { question, answer, rating, author_id } = joke;
    const queryString = `
    INSERT INTO 
      jokes (question, answer, rating, author_id) 
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const queryArgs = [question, answer, rating, author_id];
    return client.query(queryString, queryArgs).then((result) => result.rows[0]);
  };

  return { fetchAllJokes, fetchJokeById, insertJoke };
};

module.exports = generateJokeHelpers;
