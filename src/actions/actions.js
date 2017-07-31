import { browserHistory } from 'react-router';


export const newMessage = (message, name, room) => {
  return {
    type: 'NEW_MESSAGE',
    message,
    name,
    room
  };
};

export const updateUserList = (users) => {
  return {
    type: 'UPDATE_USER_LIST',
    users
  };
};

//////////////////////
const enterHome = (name) => {
  return {
    type: 'ENTER_ROOM',
    name
  };
};

export const startEnterHome = (name) => {
  return (dispatch) => {
    browserHistory.push('/home');
    dispatch(enterHome(name));
  };
};

const leaveHome = () => {
  return {
    type: 'LEAVE_ROOM',
  };
};

export const startLeaveHome = () => {
  return (dispatch) => {
    browserHistory.push('/');
    dispatch(leaveHome());
  };
};
