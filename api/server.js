//need express
const express = require('express');
const server = express();

//router

//middleware

server.get('/', (req, res) => {
    res.send("SERVER LIVE..........");
})

module.exports = server;