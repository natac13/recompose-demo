import React, { PropTypes } from 'react';


function App(props) {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
      Hello World
      <section>
        {props.children}
      </section>
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

App.defaultProps = {
  title: 'Natac\'s recompose demo',
};

export default App;
