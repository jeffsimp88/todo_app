import todosList from "../../todos.json";
import { v4 as listID } from 'uuid'
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_COMPLETED_TODOS} from './actions'

const initialState = {
    todos: todosList,    
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:{
            const newID = listID()
            const newTodo={
                'userId': 1,
                'id': newID,
                'title': action.payload,
                'completed': false
              }
            return{
             ...state, todos: [...state.todos, newTodo ] 
            }}
         case TOGGLE_TODO:{
            const newTodos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
              )          
                return {todos: newTodos}
            }
           
        case DELETE_TODO:{
            const newTodos = state.todos.filter(
                (todo) => todo.id !== action.payload
              );
          
            return{
                todos: newTodos
            }
        }
       case CLEAR_COMPLETED_TODOS:{
        const newTodos = state.todos.filter(
            (todo) => todo.completed === false
          );
      
           return{todos: newTodos}
       }
    default: return state
    }
}