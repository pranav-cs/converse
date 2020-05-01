import { createStore } from 'redux'

import auth_reducer from './reducers/auth_reducer'
import me_reducer from './reducers/me_reducer'
import messages_reducer from './reducers/messages_reducer'
import people_reducer from './reducers/people_reducer'
import rooms_reducer from './reducers/rooms_reducer'

function AppReducer(state = {}, action) {
    return {
        auth: auth_reducer(state.auth, action),
        me: me_reducer(state.me, action),
        messages: messages_reducer(state.messages, action),
        people: people_reducer(state.people, action),
        rooms: rooms_reducer(state.rooms, action)
    }
}

let store = createStore(AppReducer)

export default store