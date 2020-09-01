import todosList from "../../todos.json";
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_COMPLETED_TODOS} from './actions'

const initialState = {
    todos: todosList,    
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos: [action.payload, ...state.todos]
            }
    default: return state
    }
}