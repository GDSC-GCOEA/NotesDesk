// Require Express
const express = require('express');

// cors for providing a Connect/Express middleware that can be used to enable CORS with various options.
const cors = require('cors');

// dotenv file
require('dotenv').config({path:"config.env"})


// port variable for server post set value in config.env File
const PORT = process.env.PORT || 8080;


// creating express instance 
const app = express();

// creating server 
const http = require('http');
const server = http.createServer(app);

// using cors for cross conection 
app.use(cors());

// routes for various request


// test server response
app.get('/',(req,res)=>{
    res.send("server Respnse");
})


// lisining to port

server.listen(PORT, ()=>{
    console.log(`Srever is running on http://localhost:${PORT}`)
});