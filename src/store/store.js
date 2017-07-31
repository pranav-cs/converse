import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { nameReducer, roomsReducer, authReducer } from 'userReducers';
import { chatroomsReducer } from 'chatroomsReducers';
import { isMobileReducer } from 'uiReducers';

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    user: {
      name: nameReducer,
      rooms: roomsReducer,
      auth: authReducer
    },
    chatrooms: chatroomsReducer,
    isMobile: isMobileReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

/*{
  user: {
    name: string,
    rooms: [strings],
    authenticated: boolean
  },
  chatrooms: [{
  room: string,
  users: [other users],
  messages: [{ text, author, time }]
}]
}*/
