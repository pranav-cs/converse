import React from 'react';
import { connect } from 'react-redux';

import List from 'List';
import Textbar from 'Textbar';

export class Room extends React.Component {
  render() {
    return (
      <div id="room">
        <h1>Converse</h1>
        <List />
        <Textbar />
      </div>
    );
  }
}

export default connect()(Room);
