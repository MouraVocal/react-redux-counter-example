import { createStore, combineReducers } from "redux";
import counterReducer from '../reducers/counter'

const reducers = combineReducers({ counterReducer })

const store = createStore(reducers)

export default store
