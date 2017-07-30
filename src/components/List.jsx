import React from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';

import Message from 'Message';

export class List extends React.Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    document.getElementById('dummy').scrollIntoView({ behavior: 'smooth' });
  }

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
        <div id='dummy'></div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    messages: state.messages
  };
})(List);
