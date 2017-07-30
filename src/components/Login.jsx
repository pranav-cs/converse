import React from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';

import { startEnterHome, startLeaveHome } from 'actions';

export const socket = io();

export class Login extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      dispatch(startLeaveHome());
      console.log('Disconnected from server');
    });
  }

  onLogin(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    const data = {
      name: this.refs.name.value,
      password: this.refs.password.value
    };

    socket.emit('login', data, (result) => {
      if (result) {
        dispatch(startEnterHome(data.name));
      }
    });
  }

  onSignup(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    const data = {
      name: this.refs.name.value,
      password: this.refs.password.value
    };

    socket.emit('signup', data, (result) => {
      if (result) {
        dispatch(startEnterHome(data.name));
      }
    });
  }

  render() {
    return (
      <div id='login'>
        <div id='header'>
          <p><i className="fa fa-cloud" aria-hidden="true"></i>&nbsp;&nbsp;Pangolin</p>
        </div>
        <div id='form'>
          <input ref='name' type="text" placeholder='Enter your name' autoFocus />
          <input ref='password' type="password" placeholder='Enter password' />
          <button id='login' onClick={this.onLogin.bind(this)}>Login</button>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
