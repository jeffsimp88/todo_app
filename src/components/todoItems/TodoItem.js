import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo, toggleTodo} from '../../redux/index'

function TodoItem(props) {
  const dispatch = useDispatch()
    return (
      <li className={props.completed ? "completed" : ""}>
        <div className="view">
          <input 
            className="toggle" 
            type="checkbox" 
            defaultChecked={props.completed}
            onClick ={() => dispatch(toggleTodo(props.id))} 
          />
          <label>{props.title}</label>
          <button onClick={() => dispatch(deleteTodo(props.id))} className="destroy" />
        </div>
      </li>
    )
}


export default TodoItem