import React from 'react';
import { connect } from 'react-redux';

export class SidebarContent extends React.Component {
  render() {
    return (
      <div id='sidebarcontent'>
        <h1>This is sidebarcontent</h1>
      </div>
    );
  }
}

export default connect()(SidebarContent);
