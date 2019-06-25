import {createStore} from 'redux';
// action genereaters are functions that returns action objects
const incrementCount=({incrementBy=1}={})=>(
  {
    type:"INCREMENT",
    incrementBy
  }
)
const decrementCount=({decrementBy=1}={})=>(
  {
    type:"DECREMENT",
    decrementBy
  }
)

const resetCount=()=>(
  {
    type:"RESET"
  }
)

const setCount=({count=0}={})=>(
  {
    type:"SET",
    count
  }
)

// Reducer
// 1. Reducers are pure functions (function output depends on only the function inputs - use only state and action argument
// i.e don't use variables outside the function scope)
// 2. never change state and action directly
const countReducer =(state={count: 0}, action)=>{
  switch(action.type){
    case "INCREMENT":
      return{
        count: state.count +action.incrementBy
      }
    case "DECREMENT":
      return{
        count: state.count -action.decrementBy
      }
    case "RESET":
      return{
        count: 0
      }
    case "SET":
      return{
        count: action.count
      }
    default:
      return state
  }
  return state;
}

// access create store and is the object that tracks change in state
// when function is first called there is not state hence need to set defualt
// can use state by calling getState of createStore
const store = createStore(countReducer);


// subscribe of createStore listen for change in state and execute each time change occur
// return value from subscribe is a function we can call to unsubscribe
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState())
})


// Action is an object gets sent to createStore
store.dispatch(incrementCount())

// unsubscribe();

store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy:10}))

store.dispatch(resetCount())

store.dispatch(setCount({count:101}))
