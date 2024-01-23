const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    // Fetch posts from the database
    db.query('SELECT * FROM posts', (err, results) => {
        if (err) throw err;
        res.render('index', { posts: results });
    });
});

app.post('/addPost', (req, res) => {
    const { imageUrl, comment } = req.body;
    
    // Insert new post into the database
    db.query('INSERT INTO posts (image_url, comment) VALUES (?, ?)', [imageUrl, comment], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
