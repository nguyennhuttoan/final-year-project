const Product = require('../models/ProductModel');
const errHandler = require('../utils/errorHandler');
const asyncErrHandler = require('../middlewares/asyncErrorHandler');

exports.newProduct = asyncErrHandler(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

exports.getProducts = asyncErrHandler(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
});

exports.getSingleProduct = asyncErrHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new errHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

exports.updateProduct = asyncErrHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found',
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

exports.deleteProduct = asyncErrHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found',
    });
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: 'Product is deleted',
  });
});
