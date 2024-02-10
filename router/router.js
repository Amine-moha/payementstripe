const express=require("express")
const { payment } = require("../controleur/controler")
const paymentrouter=express.Router()
paymentrouter.post("/payment",payment)
module.exports=paymentrouter
