// const mysql = require("mysql");


// var connection = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "school"
// });

// module.exports = connection;


const { Client } = require('pg');


const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432,
 
});

client
  .connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch((err) => console.error('Error connecting to database:', err));

module.exports = client;
