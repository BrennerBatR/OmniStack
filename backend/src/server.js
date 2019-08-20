const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express(); //servidor do express para ouvir endereços
const server = require('http').Server(app);//unindo conexoes http com socket io
const io = require('socket.io')(server); //agora esta pronto para receber http e socket

const connectedUsers = {}; //map de id user e id socket para armazenar qual o socket do user. Para melhorar isso , armazenar no mongo


io.on('connection', socket => {
    console.log("Nova conexão", socket.id);
    const { user } = socket.handshake.query;

    connectedUsers[user] = socket.id;



    /*socket.on('hello' , message =>{ //escutando o hello do front
        console.log(message);
    })

    setTimeout(()=> {
        socket.emit('world', {
            message:"Hi!"
        },1000)
    })*/
})

mongoose.connect('mongodb+srv://Brenner:dezoitos@cluster0-kdimj.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use((req,res,next) => { //chega aqui antes de ir para as rotas
    req.io = io;
    req.connectedUsers = connectedUsers; //enviando para o controler esses dados

    return next();

});

app.use(cors());
app.use(express.json());
app.use(routes); //adicionando as configs do routes

server.listen(3333); // vai ouvir a porta 3333