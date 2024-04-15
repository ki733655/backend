const mongoose = require ("mongoose")



//define the schma module for orders

const ordersSchema = new mongoose.Schema({
  orderId: Number,
  customerName: String,
  pigIds: Array,
  totalWeight: Number,
  address: String,
  advance: Number,
  finalPayment: Number,
  phoneNumber: Number,
  comment: String,
  DeliveryDate: Date,
  Delivery_Status: String
});
// create a model for a single order using our schema
const orders= mongoose.model("orders", ordersSchema);

// module.exports = orders;  //export this so that other modules can use
// ----------------------------------------------------------------
//Function to connect to the database
// async function connectToDatabase() {
//     try {
//       await mongoose.connect("mongodb://127.0.0.1:27017/orders");
//       console.log("Connected to database");
//     } catch (error) {
//       console.error("Error connecting to database:", error);
//     }
//   }
  
  // Export the Boar model and the connectToDatabase function
  module.exports = {orders};
  