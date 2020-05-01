import action_type from '../action_type'

let me_default = {
    name: '',
    color: '',
    photoURL: '',
    current_room: ''
}

export default function me_reducer(state = me_default, action) {
    switch (action.type) {
        case action_type.LOGIN:
            return {
                name: action.name,
                color: action.color,
                photoURL: action.photoURL,
                current_room: 'General'
            }

        case action_type.LOGOUT:
            return me_default

        case action_type.CHANGE_ROOM:
            return {
                ...state,
                current_room: action.room
            }

        default:
            return state
    }
}