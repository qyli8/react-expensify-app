//Expenses Reducer
import moment from 'moment'
import uuid from 'uuid'
const expensesReducerDefaultState=[ 
  {
  id:uuid(),
  description: 'item 1',
  note:'',
  amount:'500',
  createdAt:moment().valueOf()
},
{
  id:uuid(),
  description: 'item 2',
  note:'',
  amount:'5067000',
  createdAt:moment().valueOf()
},
{
  id:uuid(),
  description: 'item 3',
  note:'abcd',
  amount:'5067',
  createdAt:moment().valueOf()
}
]

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
            ... expense,
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

export default expensesReducer;