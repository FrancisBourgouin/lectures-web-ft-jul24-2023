const db = require("../connection");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const createUser = (userInfo) => {
  const user = {
    id: 5,
    name: "bob",
  };
  return Promise.resolve(user);
};

module.exports = { getUsers, createUser };
