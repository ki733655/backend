const express = require("express")
const router =  express.Router();

const {Order} = require("../../models/ordermodel")

router.delete("/order-delete/:orderId", async(req, res) => {
    try{
        const orderId = req.params.orderId
        const data =  await Order.findOneAndDelete({orderId : orderId})
        console.log(data)

    }catch(error) {
        console.log("Error deleting order ", error)
    }

})

module.exports = router;
