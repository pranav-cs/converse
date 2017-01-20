import React from 'react';

export class Main extends React.Component {
  render () {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-11 col-lg-10 col-xl-9">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
