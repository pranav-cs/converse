import React from 'react';
import { connect } from 'react-redux';

export class SlidingMenu extends React.Component {
  onCloseMenu(e) {
    e.preventDefault();
    document.getElementById('slidingMenu').style.display = 'none';
  }

  render() {
    return (
      <div id='slidingMenu'>
        <p>Pangolin slidingMenu <i className="fa fa-bars" aria-hidden="true" onClick={this.onCloseMenu.bind(this)} /></p>
      </div>
    );
  }
}

export default connect()(SlidingMenu);
