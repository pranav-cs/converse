import React from 'react';
import { connect } from 'react-redux';

import Member from 'Member';

export class Sidebar extends React.Component {
  render() {
    const { otherUsers } = this.props;
    let count = 0;
    console.log(otherUsers);

    const renderMembers = () => {
      if (otherUsers.length === 0) {
        return (
          <p>There is nobody else here.</p>
        );
      }

      return otherUsers.map(({ user }) => {
        return (
          <Member key={count++} {...user} />
        );
      });
    };

    return (
      <div id='sidebar'>
        <p>Pangolin sidebar</p>
        {renderMembers()}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    otherUsers: state.otherUsers
  };
})(Sidebar);
