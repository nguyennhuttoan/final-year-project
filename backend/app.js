const express = require('express');
const products = require('./routes/product');
const errMiddleware = require('./middlewares/errors');

const app = express();

app.use(express.json());
app.use('/api/v1', products);
app.use(errMiddleware);

module.exports = app;
