export const chatroomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.chatrooms;
    case 'UPDATE_USER_LIST':
      return [
        ...state, {
          room: action.room,
          users: action.users
        }
      ];
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};
