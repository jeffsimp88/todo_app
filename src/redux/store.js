import {createStore} from 'redux'
import {reducer} from './todos/reducer'

const store = createStore(reducer)

export default store
