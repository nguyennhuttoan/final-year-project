const express = require('express');
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require('../controllers/ProductController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();

router.route('/products').get(isAuthenticatedUser, getProducts);
router.route('/product/:id').get(getSingleProduct);

router
  .route('/admin/product/new')
  .post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);
router
  .route('/admin/product/:id')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(isAuthenticatedUser, getProductReviews);
router.route('/reviews').delete(isAuthenticatedUser, deleteReview);

module.exports = router;

// const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

// router.route('/products').get(getProducts);
// router.route('/admin/products').get(getAdminProducts);
// router.route('/product/:id').get(getSingleProduct);

// router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);

// router.route('/admin/product/:id')
//     .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
//     .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

// router.route('/review').put(isAuthenticatedUser, createProductReview)
// router.route('/reviews').get(isAuthenticatedUser, getProductReviews)
// router.route('/reviews').delete(isAuthenticatedUser, deleteReview)

// module.exports = router;
