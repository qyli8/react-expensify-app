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