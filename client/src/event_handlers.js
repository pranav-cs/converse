import io from 'socket.io-client'

import {
    init_socket,
    login, logout,
    add_message,
    add_person, remove_person,
    add_room, remove_room
} from './store/action_creators/action_creators'

const setup_socket_event_handlers = (store) => {
    let socket = io('http://localhost:8080')

    store.dispatch(init_socket(socket))

    socket.once('login_success', ({ name, color, photoURL }) => {
        login(name, color, photoURL)
    })

    socket.once('logout_success', () => {
        logout()
    })

    socket.on('add_message', ({ room, name, text }) => {
        add_message(room, name, text)
    })

    socket.on('add_person', ({ name, color, photoURL }) => {
        add_person(name, color, photoURL)
    })

    socket.on('remove_person', ({ name }) => {
        remove_person(name)
    })

    socket.on('add_room', ({ room }) => {
        add_room(room)
    })

    socket.on('remove_room', ({ room }) => {
        remove_room(room)
    })
}

export default setup_socket_event_handlers