import React from 'react';
import { connect } from 'react-redux';

export class Topbar extends React.Component {
  onSlide() {
    document.getElementById('slidingMenu').style.display = 'block';
  }

  render() {
    const { room } = this.props;

    return (
      <div id='topbar'>
        <p id='logo'><span id='slide'><i className="fa fa-bars" aria-hidden="true" onClick={this.onSlide.bind(this)} />&nbsp;&nbsp;</span>Pangolin&nbsp;&nbsp;|&nbsp;&nbsp;{room}</p>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    room: state.room
  };
})(Topbar);
