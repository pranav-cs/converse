import io from 'socket.io-client'

import {
    init_socket,
    login,
    add_message,
    add_person, remove_person,
    add_room, remove_room
} from './store/action_creators/action_creators'

const setup_socket_event_handlers = (store) => {
    let socket = io('http://localhost:8080')

    store.dispatch(init_socket(socket))

    socket.once('join_success', ({ name, color, photoURL, rooms, current_room, people }) => {
        store.dispatch(login(name, color, photoURL, rooms, current_room, people))
    })

    socket.on('add_message', ({ room, name, text }) => {
        store.dispatch(add_message(room, name, text))
    })

    socket.on('add_person', ({ name, color, photoURL }) => {
        store.dispatch(add_person(name, color, photoURL))
    })

    socket.on('remove_person', ({ name }) => {
        store.dispatch(remove_person(name))
    })

    socket.on('add_room', ({ room }) => {
        store.dispatch(add_room(room))
    })

    socket.on('remove_room', ({ room }) => {
        store.dispatch(remove_room(room))
    })
}

export default setup_socket_event_handlers