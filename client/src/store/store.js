import { createStore, action } from 'easy-peasy'

const rooms_model = [
    'General',
    'News',
    'Sports'
]

const messages_model = {
    'General': [
        {
            name: "John Smith",
            message: "Hello"
        },
        {
            name: "Trent",
            message: "Hi"
        }
    ],
    'News': [],
    'Sports': [],

    push_message: action((state, { room, message, name }) => {
        state[room].push({ name, message })
    })
}

const profile_model = {
    name: '',
    set_name: action((state, name) => {
        state.name = name
    }),

    color: '',
    set_color: action((state, color) => {
        state.color = color
    }),

    photo: '',
    set_photo: action((state, photo) => {
        state.photo = photo
    }),

    current_room: 'General',
    go_to: action((state, destination) => {
        state.current_room = destination
    }),

    is_logged_in: false,
    login: action((state, name) => {
        state.name = name
        state.is_logged_in = true
    }),
    logout: action((state) => {
        state.name = ''
        state.is_logged_in = false
    })
}

const store_model = {
    rooms: rooms_model,
    profile: profile_model,
    messages: messages_model
}

export const store = createStore(store_model)
