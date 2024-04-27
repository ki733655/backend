const mongoose = require("mongoose");

// Define the schema for a boar
const BoarSchema = new mongoose.Schema({
  id: {
    type: String,
    Number,
    unique: true,
  },
  roomNumber: String,
  CSF: Date,
  FMD: Date,
  Deworm: Date,
  Weight: String,
  note: String,
});

// Create the model for a single boar
const Boar = mongoose.model("Boar", BoarSchema);

// Define the schema for a Sow
const SowSchema = new mongoose.Schema({
  id: {
    type: String,
    Number,
    unique: true,
  },

  roomNumber: String,
  CSF: Date,
  FMD: Date,
  Deworm: Date,
  Weight: String,
  note: String,

});
// Create the model for a single sow
const Sow = mongoose.model("Sow", SowSchema);

// Create the model for a single piglets

const PigletsSchema = new mongoose.Schema({
  id: {
    type: String,
    Number,
    unique: true,
  },

  motherId: Number,
  fatherId: Number,
  dob: Date,
  gender: String,
  roomNumber: String,
  swineFever: Date,
  deworming: Date,
  weight: String,
  note: String,

});

const Piglets = mongoose.model("Piglets", PigletsSchema);

//Model for Khassi
const KhassiSchema = new mongoose.Schema({
  id: {
    type: String,
    Number,
    unique: true,
  },
  roomNumber: String,
  CSF: Date,
  FMD: Date,
  Deworm: Date,
  Weight: String,
  note: String,
});

const Khassi = mongoose.model("Khassi", KhassiSchema);

// Function to connect to the database
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pig");
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

// Export the Boar model and the connectToDatabase function
module.exports = { Boar, Sow, Piglets, Khassi, connectToDatabase };