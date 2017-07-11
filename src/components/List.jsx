import React from 'react';
import { connect } from 'react-redux';

import Message from 'Message';

export class List extends React.Component {
  render() {
    const { messages } = this.props;
    let count = 0;

    const renderMessages = () => {
      if (messages.length === 0) {
        return (
          <p id='empty'>There is nothing to show.</p>
        );
      }

      return messages.map((item) => {
        return (
          <Message key={count++} {...item} />
        );
      });
    };

    return (
      <div id='list'>
        {renderMessages()}
      </div>
    );
  }
}

export default connect(state => {
  return {
    messages: state.messages
  };
})(List);
