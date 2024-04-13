const express = require("express");
const router = express.Router();

const {Boar, Sow, Piglets, Khassi} = require("../../models/pigmodel");

router.get("/boar-details", async (req, res) => {
        try{
            const boardata = await Boar.find();
            res.send(boardata);

        }catch(error){
            console.log(error);
        }
})

router.get("/sow-details", async (req, res) => {
    try{
        const sowdata = await Sow.find();
        res.send(sowdata);

    }catch(error){
        console.log(error);
    }
})

router.get("/piglet-details", async (req, res) => {
    try{
        const pigletdata = await Piglets.find();
        res.send(pigletdata);

    }catch(error){
        console.log(error);
    }
})

router.get("/khassi-details", async (req, res) => {
    try{
        const khassidata = await Khassi.find();
        res.send(khassidata);

    }catch(error){
        console.log(error);
    }
})
module.exports = router;