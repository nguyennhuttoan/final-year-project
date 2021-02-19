const express = require('express');
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
} = require('../controllers/ProductController');

const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/product/new').post(newProduct);
router.route('/admin/product/:id').post(updateProduct);

module.exports = router;
