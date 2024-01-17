const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL Configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'ROOT',
  password: 'root',
  database: 'user_management_db',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

// Create database and user table
db.query(
  'CREATE DATABASE IF NOT EXISTS user_management_db; USE user_management_db; CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL);',
  (err, result) => {
    if (err) throw err;
    console.log('Database and table created or already exist');
  }
);

// Express middleware to parse JSON
app.use(express.json());

// REST API to add a user
app.post('/api/users', (req, res) => {
  const { username, email } = req.body;

  // Insert user into the database
  db.query(
    'INSERT INTO users (username, email) VALUES (?, ?)',
    [username, email],
    (err, result) => {
      if (err) {
        console.error('Error adding user: ' + err.message);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(201).json({ message: 'User added successfully', userId: result.insertId });
    }
  );
});

// REST API to get all users
app.get('/api/users', (req, res) => {
  // Retrieve all users from the database
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.error('Error fetching users: ' + err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).json(result);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
