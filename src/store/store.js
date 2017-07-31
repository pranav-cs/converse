import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { nameReducer, roomsReducer, authenticatedReducer, chatroomsReducer, isMobileReducer } from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    user: {
      name: nameReducer,
      rooms: roomsReducer,
      authenticated: authenticatedReducer
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
  messages: [{ text, author, time }]
}]
}*/
