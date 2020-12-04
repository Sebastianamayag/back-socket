const express= require('express')();
const serverHtpp = require ('http').createServer(express);
const io= require('socket.io')(serverHtpp);
//array mensajes
const Messages=[];
//configuracion socket
io.on('connection',(socket)=>{
    console.log("usuario conectado")
    socket.on('send-message',(data)=>{
        Messages.push(data)
        socket.emit('text-event',Messages);
        socket.broadcast.emit('text-event',Messages)
    })
})
//Start Server
serverHtpp.listen(3000,()=>{
    console.log("Escuchando en el puerto 3000")
});