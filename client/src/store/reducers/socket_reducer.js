import action_type from '../action_type'

const socket_default = {}

export default function socket_reducer(state = socket_default, action) {
    switch (action.type) {
        case action_type.INIT_SOCKET:
            return action.socket

        default:
            return state
    }
}