const express = require('express');
const bodyParser = require('body-parser');
//import controllers
const { getBoards, getUsers, newUser, newBoard } = require('./../database/controllers/imnotsure.js');

const app = express();
const PORT = 1234;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client/public'));

// HOMEPAGE LETS GOOOO
app.get('/', (req, res) => {
  res.end();
})

// USERS
app.get('/:username', getUsers);
app.get('/newUser', newUser);
//REDIRECT TO THE USERNAME ENDPOINT


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});