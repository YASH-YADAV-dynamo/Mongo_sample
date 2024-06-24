const mongoose = require('mongoose');

// Define the Product schema
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
});

// Create the Product model
const Product = mongoose.model('Product', ProductSchema);

// Export the Product model
module.exports = Product;
