import React, { Component, PropTypes } from 'react';
import styles from './styles.js';
/* eslint-disable react/prefer-stateless-function */
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'I am in control',
    };
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <p>Your prop.message is below</p>
        <p>{this.props.message}</p>
        <p>The message from the state</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

Main.propTypes = {
  message: PropTypes.string,
};

// merely wrapping the Component in question above to display the passing of
// props
const Wrapper = () => <Main message="A props message" />;

export default Wrapper;
