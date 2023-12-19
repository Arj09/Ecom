const express = require("express");


const app = express()
const port = 5000

app.get('/', (req, res)=>{
    res.json({message:"your sucessful in your mission"})

})



app.listen(port, (req, res)=>{
    console.log('Server is running on  port', port)

})