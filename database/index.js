const { Pool } = require('pg');
const { password } = require('../config.js');

//CONNECT
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: 'fullstackr',
  password: `${password}`,
  port: 5432
});

module.exports = {pool: pool};