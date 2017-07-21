import React from 'react';
import { connect } from 'react-redux';

export class Topbar extends React.Component {
  onShowMenu() {
    document.getElementById('slidingMenu').style.display = 'block';
  }

  render() {
    return (
      <div id='topbar'>
        <p><button onClick={this.onShowMenu.bind(this)}><i className="fa fa-bars" aria-hidden="true" /></button>&nbsp;&nbsp;Pangolin</p>
      </div>
    );
  }
}

export default connect()(Topbar);
