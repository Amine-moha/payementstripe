const express=require("express")
const cors=require('cors')
const paymentrouter = require("./router/router")
const app=express()
app.use(express.json())
const port=9000
app.use(cors({origin:"http://localhost:3000"}))
app.use("/",paymentrouter)
app.listen(port,console.log("server is ranig"))