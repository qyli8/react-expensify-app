import {createStore, combineReducers} from "redux"
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'
import authReducer from '../reducers/auth'
import pathReducer from '../reducers/path'
// Store Createion
// rather than out the reducer in the root
// create an object and register the reducer in the expenses property
export default ()=>{
  const store = createStore(
    combineReducers({
      expenses:expensesReducer,
      filter:filterReducer,
      auth:authReducer,
      newPath:pathReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store
}




