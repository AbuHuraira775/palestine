// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product.controller.js');

// Route to upload product image and create product
router.post('/product', productController.uploadImage, productController.createProduct);

module.exports = router;
