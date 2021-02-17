const express = require('express');
const products = require('./routes/product');

const app = express();

app.use(express.json());
app.use('/api/v1', products);

module.exports = app;
