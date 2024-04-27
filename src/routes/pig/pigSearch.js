const express = require("express");
const router = express.Router();
const { Boar, Sow, Piglets, Khassi } = require("../../models/pigmodel");

router.get("/boar-search-id", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Boar.find({ id: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for boar:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});

router.get("/boar-search-roomNumber", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Boar.find({ roomNumber: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for boar:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});

router.get("/boar-search-weight", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Boar.find({ Weight: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for boar:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});

// sowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

router.get("/sow-search-id", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Sow.find({ id: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for sow:", err); // Corrected error message
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});


router.get("/sow-search-roomNumber", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Sow.find({ roomNumber: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for sow:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});

router.get("/sow-search-weight", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Sow.find({ Weight: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for sow:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});


router.get("/piglet-search-id", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Piglets.find({ id: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for Piglet:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});


router.get("/piglet-search-roomNumber", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Piglets.find({ roomNumber: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for piglet:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});

router.get("/piglet-search-weight", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Piglets.find({ weight: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for piglet:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});


router.get("/khassi-search-id", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Khassi.find({ id: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for khassi:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});


router.get("/khassi-search-roomNumber", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Khassi.find({ roomNumber: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for khassi:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});

router.get("/khassi-search-weight", async (req, res) => {
    try {
        const data = req.query.search;
        const results = await Khassi.find({ Weight: data });

        // Check if there are any results
        if (results.length > 0) {
            res.status(200).json(results); // Send the results back as JSON
        } else {
            res.status(404).json({ message: "No matching records found" }); // Send a 404 status if no results found
        }
    } catch (err) {
        console.error("Error searching for khassi:", err);
        res.status(500).json({ message: "Internal server error" }); // Send a 500 status if an error occurs
    }
});


module.exports = router;