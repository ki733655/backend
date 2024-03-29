const express = require("express");
const router = express.Router();

const {Boar, Sow, Piglets, Khassi} = require("../models/pigmodel");

router.get("/boar-details", async (req, res) => {
        try{
            const boardata = await Boar.find();
            res.send(boardata);

        }catch(error){
            console.log(error);
        }
})

module.exports = router;