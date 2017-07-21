import React from 'react';

export default class Member extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className='member'>
        <p className='name'>{user}</p>
      </div>
    );
  }
}
