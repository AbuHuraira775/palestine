// controllers/productController.js
const IsraeleProduct   = require('../models/IsraelProduct.model');
const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb(new Error('Only images are allowed!'));
  }
});

// Controller functions
exports.uploadImage = upload.single('image');

exports.createProduct = async (req, res) => {
  try {
    const { name, description, category, price } = req.body;
    const product = new IsraeleProduct({
      name,
      description,
      category,
      price,
      image: req.file ? req.file.path : ''
    });
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await IsraeleProduct.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};  

exports.getProductById = async (req, res) => {
  try {
    const product = await IsraeleProduct.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, description, category, price } = req.body;
    const product = await IsraeleProduct.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.name = name;
    product.description = description;
    product.category = category;
    product.price = price;
    if (req.file) {
      product.image = req.file.path;
    }
    await product.save();
    res.json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const product = await IsraeleProduct.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.remove();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

