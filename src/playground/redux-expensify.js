import {createStore, combineReducers} from "redux"
import uuid from 'uuid'
// ADD_EXPENSE
const addExpense = (
  {
   description='',
   note='', 
   amount=0, 
   createdAt=0
  }={}
)=>({
  
  type:'ADD_EXPENSE',
  expense:{
    id:uuid(),
    description,
    note,
    amount,
    createdAt

  }

});
// REMOVE_EXPENSE
const removeExpense = ({id}={}) => ({
  type:'REMOVE_EXPENSE',
  id
})


//EDIT_EXPENSE
const editExpense = (id,updates)=>({
  type:"EDIT_EXPENSE",
  id,
  updates

})
//SET_TEXT_FILTER
const setTextFilter = (text='')=>({
  type:'SET_TEXT_FILTER',
  text
})

//SORT_BY_DATE
const sortByDate=()=>({
  type:'SORT_BY_DATE'
})
//SORT_BY_AMOUNT
const sortByAmount=()=>({
  type:'SORT_BY_AMOUNT'
})
//SET_START_DATE
const setStartDate=(startDate)=>({
  type:'SET_START_DATE',
  startDate
})

//SET_END_DATE
const setEndDate=(endDate)=>({
  type:'SET_END_DATE',
  endDate
})

//Expenses Reducer
const expensesReducerDefaultState=[]

const expensesReducer = (state=expensesReducerDefaultState, action) =>{
  switch(action.type){
    case 'ADD_EXPENSE':
    // spread operator allow concatination and create new array
     return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(i=>i.id.localeCompare(action.id)!=0)
    case 'EDIT_EXPENSE':
      return state.map( (expense)=>{
        if(expense.id === action.id){
          return ({
            ... state,
            ...action.updates
          })
        }
        else{
          return expense
        }
      })
    default:
    return state
  }
}


// Filter Reducer
const filterReducerDefaultState={
  text:'',
  sortBy:'date',// date or amount
  startDate: undefined,
  endDate: undefined
}

const filterReducer =(state=filterReducerDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return({
        ...state,
        text:action.text
      })
    case'SORT_BY_AMOUNT':
      return({
        ...state,
        sortBy:"amount"
      })
    case'SORT_BY_DATE':
      return({
        ...state,
        sortBy:"date"
      })
    case 'SET_START_DATE':
      return({
        ...state,
        startDate:action.startDate
      })
    case 'SET_END_DATE':
      return({
        ...state,
        endDate:action.endDate
      })
    default:
      return state
  }
}




// Store Createion
// rather than out the reducer in the root
// create an object and register the reducer in the expenses property
const store = createStore(
  combineReducers({
    expenses:expensesReducer,
    filter:filterReducer
  })
);


// Get visible expense
const getVisibleExpenses=(expenses, {text, sortBy, startDate, endDate})=>{
  return expenses.filter((expense)=>{
    const startDateMatch= typeof startDate !=='number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !=='number' || expense.endDate <= endDate;
    const textMatch = typeof text !=='string' || expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b)=>{
    console.log('a amount',a.amount)
    console.log('b amount',b.amount)
    console.log(sortBy)
    if (sortBy==='date')
      return a.createdAt < b.createdAt?1:-1
    else if (sortBy==='amount'){
      console.log('a amount',a.amount)
      console.log('b amount',b.amount)
      return a.amount < b.amount?1:-1
    }
    
  })
}


const unsubscribe = store.subscribe(()=>{
  const state = store.getState()
  const visibileExpenses=getVisibleExpenses(state.expenses, state.filter)
  console.log(store.getState().filter)
  console.log(visibileExpenses)
 
})

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:300, createdAt: -15000}));

const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:100, createdAt: -1000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, {description:'CoffeeHouse', amount:500}));

// store.dispatch(setTextFilter("rent"));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount())

// store.dispatch(sortByDate())

// store.dispatch(setStartDate(123))

// store.dispatch(setStartDate())

// store.dispatch(setEndDate(1250))




const demoState = {
  expenses:[{
    id:'qafdjkajei',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt:0
  }],
  filters:{
    text:'rent',
    sortBy:'amount',// date or amount
    startDate: undefined,
    endDate: undefined
  }
}
