import React, { PropTypes } from 'react';
import { compose } from 'ramda';
import withReducer from 'recompose/withReducer';
import radium from 'radium';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

import styles from './styles.js';

const OPEN = 'OPEN';
const CLOSE = 'CLOSE';
const TOGGLE = 'TOGGLE';

function MainNav(props) {
  const { isOpen, dispatch } = props;
  return (
    <div style={[styles.wrapper]}>
    hello from The Class version
      <RaisedButton
        label="Open Nav!"
        onTouchTap={() => dispatch({ type: OPEN })}
        backgroundColor="green"
      />
      <RaisedButton
        label="Close Nav!"
        onTouchTap={() => dispatch({ type: CLOSE })}
        backgroundColor="blue"
      />
      <RaisedButton
        label="Toggle Nav!"
        onTouchTap={() => dispatch({ type: TOGGLE })}
        backgroundColor="red"
      />
      <LeftNav open={isOpen} openRight>
        <MenuItem>This is...</MenuItem>
        <MenuItem>very good!</MenuItem>
      </LeftNav>

    </div>
  );
}

MainNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};


const initialState = false;

function reducer(state, action) {
  switch (action.type) {
    case OPEN:
      return true;
    case CLOSE:
      return false;
    case TOGGLE:
      return !state;
    default:
      return state;
  }
}

export default compose(
  withReducer(
    'isOpen', // prop which is the boolean
    'dispatch',
    reducer,
    initialState
  ),
  radium,
)(MainNav);
