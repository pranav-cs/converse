import React from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';

import { findIfMobile } from 'actions';

export class Container extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;

    $(window).resize(() => {
      dispatch(findIfMobile());
    });

    dispatch(findIfMobile());
  }

  render() {
    return (
      <div id="container">
        {this.props.children}
      </div>
    );
  }
}

export default connect()(Container);
