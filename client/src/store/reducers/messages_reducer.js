import action_type from '../action_type'

let messages_default = {
    'General': [],
    'News': [],
    'Sports': []
}

export default function messages_reducer(state = messages_default, action) {
    switch (action.type) {
        case action_type.ADD_MESSAGE:
            return {
                ...state,
                [action.room]: [
                    ...state[action.room],
                    {
                        name: action.name,
                        text: action.text
                    }
                ]
            }

        case action_type.ADD_ROOM:
            return {
                ...state,
                [action.room]: []
            }

        case action_type.REMOVE_ROOM: {
            const filtered_messages_keys = Object
                .keys(state)
                .filter(room => room !== action.room)

            let filtered_messages = {}
            filtered_messages_keys.map(room => filtered_messages[room] = state[room])

            return filtered_messages
        }

        case action_type.LOGOUT:
            return messages_default

        default:
            return state
    }
}
