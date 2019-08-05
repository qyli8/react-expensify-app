import React from 'react';
import {connect} from 'react-redux';
import ListItems from './ExpenseListItems';
import selectExpenses from '../selectors/expenses'
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Button from '@material-ui/core/Button';


export const ExpenseList = (props)=>(
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
    {
      props.expenses.length===0? (
        <div className="list-item list-item__message">
          <p >No Expenses</p>
        </div>
        
      ):(
        props.expenses.map(ex=>(
          <ListItems {...ex} key={ex.id}/>
          ))
      )
    }
    </div>
  </div>
)

const mapStateToProps=(state)=>{
  return{
    // redux state to be used as prop(s) of a componment inside the HigerOrderComponent (configured when redux store is created)
    expenses: selectExpenses(state.expenses, state.filter)
  }
}



export default connect(mapStateToProps)(ExpenseList)