const express = require("express");
const router = express.Router();

const {Employee} = require("../../models/employeemodel");

router.get("/employee-details", async (req, res) => {
        try{
            const employeedata = await Employee.find();
            res.send(employeedata);

        }catch(error){
            console.log(error);
        }
})

module.exports = router;