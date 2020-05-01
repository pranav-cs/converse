const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 8080

app.use(express.static(path.resolve(__dirname, 'client', 'build')))
app.use(express.json())

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.statusStatus(500)
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.js'));
})
//let photo = await fetch('https://picsum.photos/48')
// let colors = ['#f7b668', '#36a9a6', '#cdff75', '#ff96f0']
// let color = colors[Math.floor(Math.random() * colors.length)]
io.on('connection', socket => {
    socket.on('join', data => {
        console.log('join : ', data)
    })

    socket.on('disconnect', () => {
        console.log('disconnect')
    })
})

server.listen(port, () => {
    console.log(`Express server listening to port ${port}`)
})

module.exports = {
    app, io
}