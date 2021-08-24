const { pool } = require('../index.js');

//QUERIES GO HERE??? I GUESS? MODELS JUST FORMAT DATA CORRECT?
const getUsers = function () {
  pool.query(`SELECT * FROM users`)
    .then((data) => {
      res.send(data.rows)
    })
    .catch((err) => {
      console.log(err)
    })
}


const getBoards = function () {
  pool.query(`SELECT * FROM boards`)
    .then((data) => {
      res.send(data.rows)
    })
    .catch((err) => {
      console.log('errrrr', err);
    })
}

module.exports = {
  getBoards: getBoards,
  getUsers: getUsers
}