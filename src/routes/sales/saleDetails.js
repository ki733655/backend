const express = require("express");
const router = express.Router();

const {Sale} = require("../../models/salemodel");

router.get("/sale-details", async (req, res) => {
        try{
            const saleData = await Sale.find();
            res.send(saleData);

        }catch(error){
            console.log(error);
        }
})

module.exports = router;