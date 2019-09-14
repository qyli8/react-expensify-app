import React from "react";
import ExpenseForm from './ExpressForm'
import { connect } from "react-redux";
import {addExpense} from '../actions/expenses'
import Paper from '@material-ui/core/Paper';
import { withStyles} from '@material-ui/core/styles';

const CustomPaper = withStyles(()=>({
  root:{padding:"10px"}
}))(Paper)
export class AddExpensePage extends React.Component{
  onSubmit = (expense)=>{
    this.props.addExpense(expense);
    this.props.history.push('/')
  }
  cancel=()=>{
    this.props.history.push("/home")
  }

  render(){
    return(
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Add Expense</h2>
          </div>
        </div>        
        <div className="content-container">
        <CustomPaper>
          <ExpenseForm 
          onSubmit={this.onSubmit}
          />
          <button className="button-sytle__cancel" onClick={this.cancel}>
          Cancel
        </button>
          </CustomPaper>
        </div>

      
    </div>
    )
  }
}

const matchDispatchToProps=(dispatch)=>({
  addExpense: (expense)=>dispatch(addExpense(expense))
})

export default connect(undefined, matchDispatchToProps)(AddExpensePage)