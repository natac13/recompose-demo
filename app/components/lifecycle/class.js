import React, { Component, PropTypes } from 'react';
import FontIcon from 'material-ui/lib/font-icon';
import radium from 'radium';
import R from 'ramda';

import axios from 'axios';

import styles from './styles.js';

export const Todo = (props) => (
  <li key={props.todo} onClick={props.onClick}>{props.todo} {props.completed
    ? <FontIcon className="material-icons" style={styles.done}>done</FontIcon>
    : null}
  </li>
);

Todo.propTypes = {
  todo: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
};


class Todos extends Component {
  constructor(props) {
    super(props);
    console.log('In the constructor function');
    this.state = { todos: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log('In Will mount');
    axios.get('/api/todos')
      .then(
        (result) => {
          console.log(result);
          this.setState({ todos: result.data });
        },
        (error) => {
          throw error;
        });
  }

  handleClick(index) {
    return (event) => {
      event.preventDefault();
      const newTodos = R.adjust((todo) => (
        { ...todo, completed: !todo.completed }
      ), index, this.state.todos);
      this.setState({ todos: newTodos });
    };
  }


  render() {
    const todos = this.state.todos.map((todo, index) => (
      <Todo
        onClick={this.handleClick(index)}
        todo={todo.todo}
        completed={todo.completed}
      />
    ));
    return (
      <ul style={[
        styles.todos,
        styles.wrapper,
      ]}
      >
        { todos }
      </ul>
    );
  }
}


export default radium(Todos);
