import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      color: this.props.todo.completed ? 'red' : 'black'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p style={itemStyle}>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          { title }
          <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
        </p>
      </div>
    )
  }
}


//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {
  backgroundColor: 'salmon',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 8px',
  float: 'right',
  cursor: 'pointer',
}

const itemStyle = {
  padding: '10px',
  fontSize: '1.3rem',
  transition: 'all .25s ease-out'
}
export default TodoItem
