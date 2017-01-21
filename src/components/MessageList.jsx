import React from 'react';
import {connect} from 'react-redux';


export class MessageList extends React.Component {
  componentDidMount () {
    console.log('hello');
    socket.on('connect', (data) => {
      console.log('Connected client');
    });
  }
  render () {
    return (
      <div className='container container-component'>
        <h1 className='text-center title-component'>Converse</h1>
      </div>
    );
  }
}

export default connect()(MessageList);
