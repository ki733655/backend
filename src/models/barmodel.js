const mongoose = require('mongoose');

// Define schema for sales data
const barSchema = new mongoose.Schema({
    month: {
        type: String,
    },
    totalSales: {
        type: Number,
        default : 0,
    }
});

// Create mongoose model
const Bar = mongoose.model('barSale', barSchema);
module.exports = {Bar}