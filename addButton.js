const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const Product = require('./models/product');

const app = express();
const port = 3000;

// Express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Synchronize Sequelize models with the database
sequelize.sync().then(() => {
  console.log('Connected to MySQL database and synchronized Sequelize models');
}).catch(err => {
  console.error('Error connecting to MySQL database:', err);
});

// Route to display products
app.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.render('index', { products });
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to delete a product
app.post('/delete/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const result = await Product.destroy({ where: { id: productId } });
    console.log(`Deleted ${result} product(s)`);
    res.redirect('/');
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
