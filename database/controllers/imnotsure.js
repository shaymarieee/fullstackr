const { pool } = require('../index.js');

//UNECESSARY LOL
const getUsers = function (req, res) {
  pool.query(`SELECT * FROM users`)
    .then((data) => {
      res.send(data.rows)
    })
    .catch((err) => {
      console.log(err)
    })
}

// CREATE NEW USER
const newUser = function (req, res) {
  pool.query(`INSERT INTO users (username, email) VALUES (
    '${req.body.username}', '${req.body.email}')`)
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log('IMNOTSUREERROR', err)
    })
}

// GET USERS' BOARDS ON LOGIN
const getBoards = function (req, res) {
  console.log('BUTTS', req.body);
  pool.query(`SELECT * FROM boards b
    LEFT JOIN users u
    ON u.id = b.userId
    WHERE u.username = '${req.body.username}'`)
    .then((data) => {
      console.log('HERE', data.rows);
      res.send(data.rows)
    })
    .catch((err) => {
      console.log('errrrr', err);
    })
}

const newBoard = function(req, res) {
  pool.query(`INSERT INTO boards (name, userId)
    VALUES ('${req.body.name}', '${req.body.userId}')`)
    .then((data) => {
      console.log('response???', data.row)
      res.send(data.rows)
    })
}

module.exports = {
  getBoards: getBoards,
  getUsers: getUsers,
  newUser: newUser,
  newBoard: newBoard
}