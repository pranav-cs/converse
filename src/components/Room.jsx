import React from 'react';
import { connect } from 'react-redux';

import List from 'List';
import Textbar from 'Textbar';
import SidebarContent from 'SidebarContent';
import ReactSidebar from 'react-sidebar';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'black',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

const mql = window.matchMedia(`(min-width: 900px)`);

export class Room extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     mql,
     docked: false,
     open: false,
   };

   this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
   this.toggleOpen = this.toggleOpen.bind(this);
   this.onSetOpen = this.onSetOpen.bind(this);
 }

 componentWillMount() {
   mql.addListener(this.mediaQueryChanged);
   this.setState({ mql, docked: mql.matches });
 }

 componentWillUnmount() {
   this.state.mql.removeListener(this.mediaQueryChanged);
 }

 onSetOpen(open) {
   this.setState({ open });
 }

 mediaQueryChanged() {
   this.setState({
     mql,
     docked: this.state.mql.matches,
   });
 }

 toggleOpen(e) {
   this.setState({ open: !this.state.open });

   if (e) {
     e.preventDefault();
   }
  }

  renderSideButton() {
    if (!this.state.docked) {
      return (
        <div>
          <button onClick={this.toggleOpen.bind(this)} style={styles.contentHeaderMenuLink}>Menu</button>
        </div>
      );
    }
  }

  render() {
    const sidebar = (
      <div>
        <h1>Pangolin {this.renderSideButton()}</h1>
        <SidebarContent />
      </div>
    );

    const sidebarProps = {
         sidebar,
         docked: this.state.docked,
         open: this.state.open,
         onSetOpen: this.onSetOpen,
       };

    return (
      <ReactSidebar {...sidebarProps}>
        {this.renderSideButton()}
        <div id="room">
          <List />
          <Textbar />
        </div>
      </ReactSidebar>
    );
  }
}

export default connect()(Room);
