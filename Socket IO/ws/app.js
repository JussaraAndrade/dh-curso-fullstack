const express = require('express')
const app = express()
const { Server } = require('http')
const server = Server(app)

const socketIO = require('socket.io')
const io = socketIO(server)

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
let count = 0;

io.on('connection', socket => {
    count++
    io.emit('contador', count)
    socket.on('disconnect', () => {
        count--
        io.emit('contador', count)
    })
    //Escutando um evento
    socket.on('enviar msg', msg => {
        //manda para todo mundo
        socket.broadcast.emit('nova msg', msg)
    })
})


server.listen(3000, () => {
    console.log('Rodando na porta 3000');
})