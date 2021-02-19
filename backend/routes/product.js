const express = require('express');
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/ProductController');

const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(newProduct);
router.route('/admin/product/:id').post(updateProduct);
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);

module.exports = router;
