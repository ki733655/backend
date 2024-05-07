const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define schema for admin data
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        unique : true,
    },
    password: {
        type: String,
    }
});

// Define comparePassword method
adminSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

// Create mongoose model
const Admin = mongoose.model('admin', adminSchema);
module.exports = { Admin };
