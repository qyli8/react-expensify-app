import React from "react";
import { connect } from 'react-redux'
import ExpenseForm from './ExpressForm'
import { editExpense, removeExpense } from '../actions/expenses'
import Paper from '@material-ui/core/Paper';
import { withStyles} from '@material-ui/core/styles';

const CustomPaper = withStyles(()=>({
  root:{padding:"10px"}
}))(Paper)

export class EditExpensePage extends React.Component {
  editExpense = (expense) => {

    this.props.editExpense(this.props.match.params.id, expense)
    this.props.history.push("/home")
  }
  removeExpense = (e) => {
    this.props.removeExpense(this.props.expense)
    this.props.history.push("/home")
  }

  cancel=()=>{
    this.props.history.push("/home")
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Edit Expense</h2>
          </div>
        </div>
        <div className="content-container">
          <div className="edit-form-container">
          <CustomPaper >
          <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.editExpense}
        />
        <div className="button_group">
        <button className="button-sytle__cancel" onClick={this.cancel}>
          Cancel
        </button>
        <button className="button-sytle__secondary" onClick={this.removeExpense}>
          Remove
        </button>
        </div>
        </CustomPaper>
          </div>
        
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const matchDispatchaToProps = (dispatch) => ({
  removeExpense: (expense) => dispatch(removeExpense(expense)),
  editExpense: (id, expense) => dispatch(editExpense(id, expense))
})

export default connect(mapStateToProps, matchDispatchaToProps)(EditExpensePage);