//Expenses Reducer
import moment from 'moment'
import uuid from 'uuid'
const expensesReducerDefaultState=[ 
  {
  id:uuid(),
  description: 'item 13',
  note:'',
  amount:'500',
  createdAt:moment().valueOf()
},
{
  id:uuid(),
  description: 'item 12',
  note:'',
  amount:'5067000',
  createdAt:moment().valueOf()
},
{
  id:uuid(),
  description: 'item 11',
  note:'abcd',
  amount:'5067',
  createdAt:moment().valueOf()
},
{
  id:uuid(),
  description: 'item 10',
  note:'abcd',
  amount:'034.0',
  createdAt:moment().subtract(1, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item 9',
  note:'abcd',
  amount:'120.0',
  createdAt:moment().subtract(1, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item 8',
  note:'abcd',
  amount:'034.0',
  createdAt:moment().subtract(2, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item 7',
  note:'abcd',
  amount:'120.0',
  createdAt:moment().subtract(2, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item 6',
  note:'abcd',
  amount:'34.0',
  createdAt:moment().subtract(2, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item 5',
  note:'abcd',
  amount:'120.0',
  createdAt:moment().subtract(2, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item 4',
  note:'abcd',
  amount:'034.0',
  createdAt:moment().subtract(3, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item 3',
  note:'abcd',
  amount:'120.0',
  createdAt:moment().subtract(3, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item 2',
  note:'abcd',
  amount:'34.0',
  createdAt:moment().subtract(4, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item 1',
  note:'abcd',
  amount:'120.0',
  createdAt:moment().subtract(4, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item abc',
  note:'abcd',
  amount:'034.0',
  createdAt:moment().subtract(5, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item 1efg',
  note:'abcd',
  amount:'120.0',
  createdAt:moment().subtract(5, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item hij',
  note:'abcd',
  amount:'034.0',
  createdAt:moment().subtract(6, 'months').valueOf()
},
{
  id:uuid(),
  description: 'item klm',
  note:'abcd',
  amount:'120.0',
  createdAt:moment().subtract(5, 'months').valueOf()
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