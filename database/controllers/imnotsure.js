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
  let email = req.url.slice(1);

  pool.query(`SELECT * FROM boards b
    LEFT JOIN users u
    ON u.id = b.userId
    WHERE u.email = '${email}'`)
    .then((data) => {
      //console.log('HERE', data.rows);
      res.send(data.rows);
    })
    .catch((err) => {
      console.log('errrrr', err);
    })
}

const getTickets = function (req, res) {
  const {boardId} = req.params;
  console.log('ova here', boardId)

  pool.query(`SELECT * FROM tickets t
    LEFT JOIN boards b
    ON b.id = t.boardId
    WHERE b.id = '${(boardId - 1)}'`)
    .then((data) => {
      console.log('YAY TICKETS', data.rows);
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    })
}

const newBoard = function(req, res) {
  pool.query(`INSERT INTO boards (name, userId)
    VALUES ('${req.body.name}', '${req.body.userId}')`)
    .then((data) => {
      //console.log('response???', data.row)
      res.send(data.rows)
    })
}

module.exports = {
  getBoards: getBoards,
  getUsers: getUsers,
  newUser: newUser,
  newBoard: newBoard,
  getTickets: getTickets
}