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
    'Sports': []
}

const profile_model = {
    name: '',
    set_name: action((state, payload) => {
        state.name = payload.name
    }),

    current_room: 'General',
    go_to: action((state, destination) => {
        state.current_room = destination
    }),

    is_logged_in: false,
    login: action((state) => {
        state.is_logged_in = true
    }),
    logout: action((state) => {
        state.is_logged_in = false
    })
}

const store_model = {
    rooms: rooms_model,
    profile: profile_model,
    messages: messages_model
}

export const store = createStore(store_model)

