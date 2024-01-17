const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL Configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'ROOT',
  password: 'root',
  database: 'expense_management_db',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

// Create database and tables
db.query(
  'CREATE DATABASE IF NOT EXISTS expense_management_db; USE expense_management_db; ' +
    'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL); ' +
    'CREATE TABLE IF NOT EXISTS expenses (id INT AUTO_INCREMENT PRIMARY KEY, userId INT, description VARCHAR(255) NOT NULL, amount DECIMAL(10, 2) NOT NULL, date DATE NOT NULL);',
  (err, result) => {
    if (err) throw err;
    console.log('Database and tables created or already exist');
  }
);

// Express middleware to parse JSON
app.use(express.json());

// Controllers
const userController = require('./controllers/userController');
const expenseController = require('./controllers/expenseController');

// Routes
app.use('/api/users', userController);
app.use('/api/expenses', expenseController);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
