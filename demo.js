// ...

// Create database and tables
db.query(
  'CREATE DATABASE IF NOT EXISTS expense_management_db; USE expense_management_db; ' +
    'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL); ' +
    'CREATE TABLE IF NOT EXISTS expenses (id INT AUTO_INCREMENT PRIMARY KEY, userId INT, description VARCHAR(255) NOT NULL, amount DECIMAL(10, 2) NOT NULL, date DATE NOT NULL); ' +
    'CREATE TABLE IF NOT EXISTS products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, price DECIMAL(10, 2) NOT NULL); ' +
    'CREATE TABLE IF NOT EXISTS user_product (userId INT, productId INT, PRIMARY KEY(userId, productId), FOREIGN KEY (userId) REFERENCES users(id), FOREIGN KEY (productId) REFERENCES products(id));',
  (err, result) => {
    if (err) throw err;
    console.log('Database and tables created or already exist');
  }
);

// ...
