import { browserHistory } from 'react-router';
import axios from 'axios';

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
        localStorage.setItem('x-auth', user.headers['x-auth']);
        dispatch(signup(user));
        browserHistory.push('/home');
      } else {
        console.log('Sorry! No Web Storage support..');
      }
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
        localStorage.setItem('x-auth', user.headers['x-auth']);
        dispatch(login(user));
        browserHistory.push('/home');
      } else {
        console.log('Sorry! No Web Storage support..');
      }
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
      browserHistory.push('/');
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
