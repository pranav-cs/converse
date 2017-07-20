import React from 'react';
import { connect } from 'react-redux';

import List from 'List';
import Textbar from 'Textbar';
import Sidebar from 'Sidebar';
import Topbar from 'Topbar';

import { findIfMobile } from 'actions';

export class Room extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(findIfMobile());
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(findIfMobile());
    //window.addEventListener('onresize', dispatch(findIfMobile()));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(findIfMobile());
    //window.removeEventListener('onresize', dispatch(findIfMobile()));
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
        <List />
        <Textbar />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    isMobile: state.isMobile
  };
})(Room);
