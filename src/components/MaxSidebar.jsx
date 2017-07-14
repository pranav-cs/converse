import React from 'react';
import { connect } from 'react-redux';

import { updateUserList } from 'actions';

import { socket } from 'Login';

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    socket.on('updateUserList', (users) => {
      dispatch(updateUserList(users));
    });
  }

  render() {
    return (
      <div id='sidebar'>

      </div>
    );
  }
}

export default connect((state) => {
  return {
    otherUsers: state.otherUsers
  };
})(Sidebar);
