const express = require("express");
const router = express.Router();

const {Order} = require("../../models/ordermodel");

router.get("/order-details", async (req, res) => {
        try{
            const boardata = await Order.find();
            res.send(boardata);

        }catch(error){
            console.log(error);
        }
})

module.exports = router;