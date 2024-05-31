// db.js
const mysql = require('mysql');
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: '1solution',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;
