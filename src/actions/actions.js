import { browserHistory } from 'react-router';

const enterRoom = (name, room) => {
  return {
    type: 'ENTER_ROOM',
    name,
    room
  };
};

export const startEnterRoom = (name, room) => {
  return (dispatch) => {
    browserHistory.push('/room');
    dispatch(enterRoom(name, room));
  };
};

const leaveRoom = () => {
  return {
    type: 'LEAVE_ROOM',
  };
};

export const startLeaveRoom = () => {
  return (dispatch) => {
    browserHistory.push('/');
    dispatch(leaveRoom());
  };
};


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
