import action_type from '../action_type'

let rooms_default = ['General', 'News', 'Sports']

export default function rooms_reducer(state = rooms_default, action) {
    switch (action.type) {
        case action_type.ADD_ROOM:
            return [
                ...state,
                action.room
            ]

        case action_type.REMOVE_ROOM:
            return state.filter(room => room !== action.room)

        default:
            return state
    }
}