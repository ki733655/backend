const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const fs = require("fs");
const mongoose = require("mongoose");
const { Boar } = require("../../models/pigmodel");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Function to parse date string or Date object
function parseDate(dateInput) {
  if (!dateInput) {
    return null;
  }

  // Check if dateInput is already a Date object
  if (dateInput instanceof Date) {
    return dateInput;
  }

  // Try parsing date string in "DD-MM-YYYY" format
  const parts = dateInput.split("-");
  if (parts.length !== 3) {
    console.error('Invalid date format:', dateInput);
    return null; // Invalid date format
  }

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Months are 0-based
  const year = parseInt(parts[2], 10);

  const date = new Date(year, month, day);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error('Invalid date:', dateInput);
    return null; // Invalid date
  }

  return date;
}

router.post("/boar-upload", upload.single("excelFile"), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const formData = xlsx.utils.sheet_to_json(worksheet);

    // Process 'formData' and save to database
    for (const data of formData) {
      // Skip if id is null or not a string
      if (typeof data.id !== 'string' || data.id.trim() === "") {
        console.log("Skipping entry with invalid id:", data);
        continue;
      }

      const boarData = {
        id: data.id.trim(),
        roomNumber: parseInt(data.roomNumber) || null,
        CSF: parseDate(data.CSF),
        FMD: parseDate(data.FMD),
        Deworm: parseDate(data.Deworm),
        Weight: parseFloat(data.Weight) || null,
        note: data.note || null,
        createdAt: new Date(), // assuming you want to set createdAt to current date/time
        updatedAt: new Date() // assuming you want to set updatedAt to current date/time
      };

      // Create a new Boar document
      const newBoar = new Boar(boarData);
      
      // Save the Boar document to the database
      await newBoar.save();
    }

    res.status(200).json({ message: "File uploaded successfully" });
    console.log("File uploaded successfully")
  } catch (error) {
    console.error("Error processing Excel file:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  } finally {
    // Optionally, delete the temporary file after processing
    if (file && file.path) {
      fs.unlinkSync(file.path);
    }
  }
});

module.exports = router;
