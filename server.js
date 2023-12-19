const express = require("express");


const app = express()
const port = 5000

app.get('/', (req, res)=>{
    res.json({message:"your sucessful in your mission"})

})
app.get('/api/user', (req, res)=>{
    res.json({message:"Please login in system "})

})



app.listen(port, (req, res)=>{
    console.log('Server is running on  port', port)

})