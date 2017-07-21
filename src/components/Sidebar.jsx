import React from 'react';
import { connect } from 'react-redux';

import Member from 'Member';

export class Sidebar extends React.Component {
  render() {
    const { otherUsers, room } = this.props;
    let count = 0;

    const renderMembers = () => {
      if (otherUsers.length === 0) {
        return (
          <p className='member'>There is nobody else here.</p>
        );
      }

      return otherUsers.map((item) => {
        return (
          <Member key={count++} user={item} />
        );
      });
    };

    return (
      <div id='sidebar'>
        <p className='header'>{room}</p>
        {renderMembers()}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    room: state.room,
    otherUsers: state.otherUsers
  };
})(Sidebar);
