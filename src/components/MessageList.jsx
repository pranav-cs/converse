import React from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
let socket = io(`http://localhost:3000`); 

export class MessageList extends React.Component {
  render () {
    return (
      <div className='container container-component'>
        <h1 className='text-center title-component'>Converse</h1>
      </div>
    );
  }
}

export default connect()(MessageList);
