import React from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';

import List from 'List';
import Textbar from 'Textbar';
import Sidebar from 'Sidebar';
import Topbar from 'Topbar';
import SlidingMenu from 'SlidingMenu';

import { findIfMobile } from 'actions';

export class Room extends React.Component {
  constructor(props) {
    super(props);
    $(window).resize(() => {
      const { dispatch } = this.props;
      dispatch(findIfMobile());
    });
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(findIfMobile());
  }

  renderSidemenuOrTopbar() {
    const { isMobile } = this.props;

    if (isMobile) {
      return (<Topbar />);
    }

    return (<Sidebar />);
  }

  render() {
    return (
      <div id='room'>
        {this.renderSidemenuOrTopbar()}
        <SlidingMenu />
        <div id='main'>
          <List />
          <Textbar />
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    isMobile: state.isMobile
  };
})(Room);
