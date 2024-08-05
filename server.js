const express = require('express');
const server = express();

server.listen(3000);

// //middleware
// server.used((req,res)=>{
//     console.log('teste')
// })

server.user((req,res,next)=>{
    console.log('teste1');
    next();
})

server.use((req,res,next)=>{
    req.requestTime=Date.now();
})