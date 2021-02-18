const Product = require('../models/ProductModel');
const dotenv = require('dotenv');
const connectDb = require('../config/database');
const products = require('../data/products');

dotenv.config({
  path: 'backend/config/config.env',
});

connectDb();

const seedProduct = async () => {
  try {
    await Product.deleteMany();
    console.log('Prduct deleted');
    await Product.insertMany(products)
    console.log('All products are added');
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

seedProduct();
