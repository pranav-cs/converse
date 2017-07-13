import React from 'react';
import { connect } from 'react-redux';

import List from 'List';
import Textbar from 'Textbar';
//import Sidebar from 'Sidebar';

export class Room extends React.Component {
  render() {
    return (
      <div id="room">
        <List />
        <Textbar />
      </div>
    );
  }
}

export default connect()(Room);
