const pgp = require('pg-promise')();
require('dotenv').config();


const db = pgp({
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: false // Set to true if you want to enforce SSL certificate validation 
});

module.exports = db;
