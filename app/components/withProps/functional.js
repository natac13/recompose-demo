import React, { PropTypes } from 'react';
import withProps from 'recompose/withProps';

import styles from './styles.js';

function Main(props) {
  return (
    <div style={styles.wrapper}>
      <p>The passed in props?</p>
      <p>{props.message}</p>
      <p>withProps will take precedence over the passed in props</p>
    </div>
  );
}

Main.propTypes = {
  message: PropTypes.string,
};

const FinalMain = withProps(
  { message: 'Message you WILL see!' }
)(Main);

const Wrapper = () => <FinalMain message="You should not see me :(" />;

export default Wrapper;
