import action_type from '../action_type'

const auth_default = {
    is_logged_in: false
}

export default function auth_reducer(state = auth_default, action) {
    switch (action.type) {
        case action_type.LOGIN:
            return {
                is_logged_in: true
            }

        case action_type.LOGOUT:
            return auth_default

        default:
            return state
    }
}