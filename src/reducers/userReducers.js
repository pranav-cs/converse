export const nameReducer = (state = '', action) => {
  switch (action.type) {
    case 'ENTER_HOME':
      return action.name;
    case 'LEAVE_HOME':
      return '';
    default:
      return state;
  }
};

export const roomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ENTER_HOME':
      return action.room;
    case 'LEAVE_HOME':
      return '';
    default:
      return state;
  }
};

export const authenticatedReducer = (state = false, action) => {
  switch (action.type) {
    case 'ENTER_HOME':
      return true;
    case 'LEAVE_HOME':
      return false;
    default:
      return state;
  }
};
