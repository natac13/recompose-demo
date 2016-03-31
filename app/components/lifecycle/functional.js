import React, { PropTypes } from 'react';
import axios from 'axios';
import { adjust, compose } from 'ramda';
import radium from 'radium';
import withReducer from 'recompose/withReducer';
import lifecycle from 'recompose/lifecycle';
import pure from 'recompose/pure';

import { Todo } from './class.js';
const CREATE_TODOS = 'CREATE_TODOS';
const TOGGLE_TODO = 'TOGGLE_TODO';

import styles from './styles.js';

function Todos(props) {
  const { todos, dispatch } = props;
  return (
    <ul style={[
      styles.todos,
      styles.wrapper,
    ]}
    >
     { !!todos && todos.map((todo, index) => (
        <Todo
          onClick={() => { dispatch({ type: TOGGLE_TODO, payload: { index } }); }}
          todo={todo.todo}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}

Todos.propTypes = {
  todos: PropTypes.array,
  dispatch: PropTypes.func,
};

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case CREATE_TODOS:
      return action.payload;
    case TOGGLE_TODO:
      return adjust((todo) => (
        { ...todo, completed: !todo.completed }
      ), action.payload.index, state);
    default:
      return state;
  }
}

function setup(component) {
  if (component.props.todos.length === 0) {
    axios.get('api/todos')
      .then((result) => {
        component.props.dispatch({ type: CREATE_TODOS, payload: result.data });
      });
  }
}

export default compose(
  withReducer(
    'todos',
    'dispatch',
    reducer,
    initialState,
  ),
  lifecycle(
    setup,
    null,
  ),
  pure,
  radium,
)(Todos);
