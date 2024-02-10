// Import required modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ROOT',
  database: 'expense_tracker'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Create Express application
const app = express();

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Endpoint to create a new user
app.post('/users', (req, res) => {
  const { username, email, password } = req.body;
  const INSERT_USER_QUERY = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

  db.query(INSERT_USER_QUERY, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send('Error inserting user');
    } else {
      console.log('User inserted successfully');
      res.status(200).send('User inserted successfully');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
