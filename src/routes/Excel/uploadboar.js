const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const fs = require("fs");
const mongoose = require("mongoose");
const { Boar } = require("../../models/pigmodel");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Function to validate date string
function isValidDate(dateString) {
  return !isNaN(Date.parse(dateString));
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
      // Skip if id is null or empty
      if (!data.id || data.id.trim() === "") {
        console.log("Skipping entry with empty id:", data);
        continue;
      }

      const boarData = {
        id: data.id,
        roomNumber: data.roomNumber,
        CSF: isValidDate(data.CSF) ? new Date(data.CSF) : null,
        FMD: isValidDate(data.FMD) ? new Date(data.FMD) : null,
        Deworm: isValidDate(data.Deworm) ? new Date(data.Deworm) : null,
        Weight: data.Weight,
        note: data.note,
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
