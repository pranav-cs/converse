import React from 'react';
import { connect } from 'react-redux';

import Member from 'Member';

export class SlidingMenu extends React.Component {
  onClose(e) {
    e.preventDefault();
    document.getElementById('slidingMenu').style.display = 'none';
  }

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
      <div id='slidingMenu'>
        <div className='slide'><i className="fa fa-bars" aria-hidden="true" onClick={this.onClose.bind(this)} /></div>
        <div className='member title'>
          <p className='name'>MEMBERS</p>
        </div>
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
})(SlidingMenu);
