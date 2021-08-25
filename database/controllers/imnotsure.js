const { pool } = require('../index.js');

//QUERIES GO HERE??? I GUESS? MODELS JUST FORMAT DATA CORRECT?
const getUsers = function (req, res) {
  pool.query(`SELECT * FROM users`)
    .then((data) => {
      res.send(data.rows)
    })
    .catch((err) => {
      console.log(err)
    })
}

const newUser = function (req, res) {
  console.log('request bod', req.body)
  pool.query(`INSERT INTO users (username, email) VALUES (
    ${req.body.username}, ${req.body.email})`)
    .then((data) => {
      console.log('look data', data);
      res.send(data.rows);
    })
    .catch((err) => {
      console.log('IMNOTSUREERROR', err)
    })
}

const getBoards = function (req, res) {
  console.log('hi', req.body)
  pool.query(`SELECT * FROM users`)
    .then((data) => {
      //console.log('ya made it!!', data)
      res.send(data.rows)
    })
    .catch((err) => {
      console.log('errrrr', err);
    })
}

const newBoard = function(req, res) {
  pool.query(`INSERT INTO boards (name, userId) VALUES (
    //gotta find the user id first and then yeah
  )`)
}

module.exports = {
  getBoards: getBoards,
  getUsers: getUsers,
  newUser: newUser,
  newBoard: newBoard
}