import React from 'react';
import { connect } from 'react-redux';

export class Topbar extends React.Component {
  render() {
    return (
      <div id='topbar'>
        <p><i className="fa fa-bars" aria-hidden="true" />&nbsp;&nbsp;Pangolin</p>
      </div>
    );
  }
}

export default connect()(Topbar);
