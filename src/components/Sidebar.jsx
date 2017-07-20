import React from 'react';
import { connect } from 'react-redux';

export class Sidebar extends React.Component {
  render() {
    return (
      <div id='sidebar'>
        <p>Pangolin sidebar</p>
      </div>
    );
  }
}

export default connect()(Sidebar);
