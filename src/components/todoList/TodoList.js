import React from 'react'
import {connect} from 'react-redux'
import TodoItem from '../todoItems/TodoItem'

 function TodoList (props) {
 
    return (
      <section className="main">
        <ul className="todo-list">
          {props.todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              title={todo.title} 
              completed={todo.completed} 
              id={todo.id} 
            />
          ))}
        </ul>
      </section>
    )
}

const mapStateToProps = (state) => {
  return{
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)