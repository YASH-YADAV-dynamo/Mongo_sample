const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
}, {
    timestamps: true,
});

// Create the User model
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;
