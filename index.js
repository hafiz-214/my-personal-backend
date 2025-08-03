const express = require('express');
const env = require('dotenv').config();

const app = express();



app.get('/', (req, res )=>{
    res.status(200).json({msg: ' running on the way!!!!'})
});



const PORT = process.env.PORT || 8000 ;
app.listen(PORT, ()=>{console.log(`Your server is running on ${PORT}`)})