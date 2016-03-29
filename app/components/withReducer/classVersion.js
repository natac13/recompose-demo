import React, { Component } from 'react';
import radium from 'radium';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';

import styles from './styles.js';

/* eslint-disable react/prefer-stateless-function */
class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
        <div style={[styles.wrapper]}>
        hello from The Class version
          <FlatButton
            label="Open Nav!"
            onTouchTap={this.handleClick}
            style={ styles.toggleBtn }
          />
          <LeftNav open={this.state.isOpen}>
            <MenuItem>This is...</MenuItem>
            <MenuItem>No good!</MenuItem>
          </LeftNav>

        </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default radium(MainNav);
