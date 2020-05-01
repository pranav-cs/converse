const express = require('express')
const axios = require('axios')
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

let people = {}
let rooms = ['General', 'Sports', 'News']

io.on('connection', socket => {
    socket.on('join', ({ name }) => {
        if (people[name]) {
            socket.emit('join_error', 'Name is not unique')
            return
        }

        const seed = Math.floor(Math.random() * 12345)
        let photoURL = `https://picsum.photos/seed/${seed}/48`

        let colors = ['#f7b668', '#36a9a6', '#cdff75', '#ff96f0']
        let color = colors[Math.floor(Math.random() * colors.length)]

        people[name] = { color, photoURL }

        socket.emit('join_success', {
            name,
            color,
            photoURL,
            rooms,
            current_room: 'General',
            people
        })

        socket.broadcast.emit('add_person', {
            name,
            color,
            photoURL
        })
    })

    socket.on('disconnect', ({ name }) => {
        if (people[name]) {
            delete people[name]
        }

        socket.emit('logout_success', {})
        socket.broadcast.emit('remove_person', { name })
    })

    socket.on('add_message', ({ room, name, text }) => {
        io.emit('add_message', { room, name, text })
    })
})

server.listen(port, () => {
    console.log(`Express server listening to port ${port}`)
})

module.exports = {
    app, io
}