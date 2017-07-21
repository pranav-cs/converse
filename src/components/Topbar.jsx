import React from 'react';
import { connect } from 'react-redux';

export class Topbar extends React.Component {
  onShowMenu() {
    document.getElementById('slidingMenu').style.display = 'block';
  }

  render() {
    return (
      <div id='topbar'>
        <p id='head'><i className="fa fa-bars" aria-hidden="true" onClick={this.onShowMenu.bind(this)} />&nbsp;&nbsp;Pangolin</p>
      </div>
    );
  }
}

export default connect()(Topbar);
