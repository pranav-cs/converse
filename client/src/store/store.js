import { createStore, action } from 'easy-peasy'

const rooms_model = {
    list: ['General', 'News', 'Sports'],
    add: action((state, room) => state.list.push(room))
}

const messages_model = {
    messages: {
        'General': [],
        'News': [],
        'Sports': []
    },

    push_message: action((state, { room, message, name }) => {
        state.messages[room].push({ name, message })
    })
}

const profiles_model = {
    me: {
        name: '',
        color: '',
        photoURL: '',
        current_room: 'General',
        is_logged_in: false
    },

    profiles: {},

    add: action((state, { name, color, photoURL }) => {
        if (state.profiles[name]) {
            state.profiles[name] = { color, photoURL }
        }
    }),

    remove: action((state, name) => {
        if (state.profiles[name]) {
            delete state.profiles[name]
        }
    }),

    go_to: action((state, destination) => {
        state.me.current_room = destination
    }),

    login: action((state, { name, color, photoURL }) => {
        state.me.name = name
        state.me.color = color
        state.me.photoURL = photoURL
        state.me.is_logged_in = true

        state.profiles[name] = { color, photoURL }
    }),

    logout: action((state) => {
        if (state.profiles[state.me.name]) {
            delete state.profiles[state.me.name]
        }

        state.me.name = ''
        state.me.color = ''
        state.me.photoURL = ''
        state.me.is_logged_in = false
    })
}

const store_model = {
    rooms: rooms_model,
    people: profiles_model,
    messages: messages_model
}

export const store = createStore(store_model)
