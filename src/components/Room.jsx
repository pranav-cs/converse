import React from 'react';
import { connect } from 'react-redux';

import List from 'List';
import Textbar from 'Textbar';
//import MaxSidebar from 'MaxSidebar';
import MaxSidebar from 'react-sidebar';

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

const mql = window.matchMedia(`(min-width: 800px)`);

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

 toggleOpen(ev) {
   this.setState({ open: !this.state.open });

   if (ev) {
     ev.preventDefault();
   }
   //!this.state.docked &&
 }
  render() {
    const sidebar = <h1>this is the sidebar</h1>;
    const sidebarProps = {
         sidebar,
         docked: this.state.docked,
         open: this.state.open,
         onSetOpen: this.onSetOpen,
       };

    return (
      <MaxSidebar {...sidebarProps}>
        <div id="room">
          <div>
            <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>
             <span>Responsive React Sidebar</span>
          </div>
          <h1>here lies the main content</h1>
        </div>
      </MaxSidebar>
    );
  }
}

export default connect()(Room);
