import { browserHistory } from 'react-router';
import axios from 'axios';

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

export const findIfMobile = () => {
  return {
    type: 'UPDATE_IS_MOBILE',
    isMobile: window.matchMedia('(max-width: 767px)').matches
  };
};

///////////////////////////////// authentication

// sign up
const signup = (user) => {
  return {
    type: 'SIGNUP',
    user
  };
};

export const startSignup = (email, password) => {
  return (dispatch) => {
    // axios.post(path, data, header)
    // user contains _id and email
    axios.post('/api/users', { email, password }).then((user) => {
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('x-auth', user.headers['x-auth'])
      } else {
        console.log('Sorry! No Web Storage support..');
      }

      dispatch(signup(user));
      browserHistory.push('/home');
    }).catch(() => {

    });
  };
};

// login
const login = (user) => {
  return {
    type: 'LOGIN',
    user
  };
};

export const startLogin = (email, password) => {
  return (dispatch) => {
    return axios.post('/api/users/login', { email, password }).then((user) => {
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('x-auth', user.headers['x-auth'])
      } else {
        console.log('Sorry! No Web Storage support..');
      }

      dispatch(login(user));
      browserHistory.push('/home');
    }).catch(() => {

    });
  };
};

// logout
const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const startLogout = () => {
  return (dispatch) => {
    const headers = {
      'x-auth': localStorage.getItem('x-auth')
    };

    return axios.delete('/api/users/me/token', { headers }).then(() => {
      dispatch(logout());
      localStorage.removeItem('x-auth');
    }).catch(() => {

    });
  };
};

export const checkIfLoggedIn = () => {
  return () => {
    const headers = {
      'x-auth': localStorage.getItem('x-auth')
    };

    return axios.get('/api/users/me', { headers }).then(() => {
      return true;
    }).then(() => {
      return false;
    });
  };
};
