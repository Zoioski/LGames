import { createStore } from 'redux'
import rootReducer from './modulo/rootReducer'

const store = createStore(rootReducer)

export default store;