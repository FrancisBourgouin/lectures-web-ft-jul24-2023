const fetchAllAuthors = (client) => {
  const queryString = `
  SELECT * FROM authors
  `;
  return client.query(queryString).then((result) => result.rows);
};

const fetchAuthorById = (client, authorId) => {
  // const mockResult = {
  //   id: 10,
  //   name: "Olga",
  //   funny: true,
  //   description: "A student in nov 22",
  // };

  // return Promise.resolve(mockResult);

  const queryString = `
  SELECT * FROM authors WHERE id = $1
  `;
  const queryArgs = [authorId];
  return client.query(queryString, queryArgs).then((result) => result.rows[0]);
};

module.exports = { fetchAllAuthors, fetchAuthorById };
