import React from "react";
import ExpenseForm from './ExpressForm'
import { connect } from "react-redux";
import {addExpense} from '../actions/expenses'
export class AddExpensePage extends React.Component{
  onSubmit = (expense)=>{
    this.props.addExpense(expense);
    this.props.history.push('/')
  }

  render(){
    return(
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
      <ExpenseForm 
        onSubmit={this.onSubmit}
      />
    </div>
    )
  }
}

const matchDispatchToProps=(dispatch)=>({
  addExpense: (expense)=>dispatch(addExpense(expense))
})

export default connect(undefined, matchDispatchToProps)(AddExpensePage)