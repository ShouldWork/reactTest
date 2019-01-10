import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import './ToDos.css';

class ToDos extends Component {
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={ this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

// PropTypes
ToDos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default ToDos;
