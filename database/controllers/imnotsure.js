const pool = require('../index.js');

//QUERIES GO HERE??? I GUESS? MODELS JUST FORMAT DATA CORRECT?
const getSomething = () => {
  pool.query(`SELECT * FROM tickets`)
    .then((data) => {
      res.send(data.rows)
    })
    .catch((err) => {
      console.log('errrrr', err);
    })
}

module.exports = {
  getSomething: getSomething
}