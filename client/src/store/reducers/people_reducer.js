import action_type from '../action_type'

const people_default = {}

export default function people_reducer(state = people_default, action) {
    switch (action.type) {
        case action_type.ADD_PERSON:
        case action_type.LOGIN:
            return {
                ...state,
                [action.name]: {
                    name: action.name,
                    color: action.color,
                    photoURL: action.photoURL
                }
            }

        case action_type.REMOVE_PERSON: {
            const filtered_names = Object
                .keys(state)
                .filter(name => name !== action.name)

            let filtered_people = {}
            filtered_names.map(name => filtered_people[name] = state[name])

            return filtered_people
        }

        case action_type.LOGOUT:
            return people_default

        default:
            return state
    }
}
