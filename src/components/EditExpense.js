import React from "react";
import {connect} from 'react-redux'
import ExpenseForm from './ExpressForm'
import {editExpense, removeExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component{
  editExpense=(expense)=>{
        
    this.props.editExpense(this.props.match.params.id, expense)
    this.props.history.push("/")
  }
  removeExpense=(e)=>{
    this.props.removeExpense(this.props.expense)
    this.props.history.push("/")
  }
  
  render(){
    return(
      <div>
    Editing the expense with id of {this.props.match.params.id}
    <ExpenseForm
      expense={this.props.expense}
      onSubmit={this.editExpense}
    />
    <button onClick={this.removeExpense}>
        Remove
    </button>
    </div>
    )
  }
}

const mapStateToProps=(state, props)=>{
  return{
    expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
  }
}

const matchDispatchaToProps=(dispatch)=>({
  removeExpense: (expense)=>dispatch(removeExpense(expense)),
  editExpense: (id, expense)=>dispatch(editExpense(id, expense))
})

export default connect(mapStateToProps, matchDispatchaToProps)(EditExpensePage);