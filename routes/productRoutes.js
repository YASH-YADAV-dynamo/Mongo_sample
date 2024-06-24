const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add more routes for creating, updating, and deleting products as needed

module.exports = router;
