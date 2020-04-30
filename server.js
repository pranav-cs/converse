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

io.on('connection', client => {
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
})

server.listen(port, () => {
    console.log(`Express server listening to port ${port}`)
})

module.exports = {
    app
}