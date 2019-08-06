const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express(); //servidor do express para ouvir endereços

mongoose.connect('mongodb+srv://Brenner:dezoitos@cluster0-kdimj.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser : true
})


server.use(express.json());
server.use(routes); //adicionando as configs do routes

server.listen(3333); // vai ouvir a porta 3333