const express = require('express');
const { getProducts } = require('../controller/ProductController');

const router = express.Router();

router.route('/products').get(getProducts);

module.exports = router;
