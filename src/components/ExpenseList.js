import React from 'react';
import {connect} from 'react-redux';
import ListItems from './ExpenseListItems';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props)=>(
  <div>
    {
      props.expenses.length===0? (
        <p>No Expenses</p>
      ):(
        props.expenses.map(ex=>(
          <ListItems {...ex} key={ex.id}/>
          ))
      )
    }
  </div>
)

const mapStateToProps=(state)=>{
  return{
    // redux state to be used as prop(s) of a componment inside the HigerOrderComponent (configured when redux store is created)
    expenses: selectExpenses(state.expenses, state.filter)
  }
}



export default connect(mapStateToProps)(ExpenseList)