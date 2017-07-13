import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { nameReducer, roomReducer, messagesReducer, otherUsersReducer } from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    name: nameReducer,
    room: roomReducer,
    otherUsers: otherUsersReducer,
    messages: messagesReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
