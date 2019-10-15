import React from "react";
import { connect } from 'react-redux'
import {home} from '../actions/path'
import ExpenseForm from './ExpressForm'
import { editExpense, removeExpense } from '../actions/expenses'
import Paper from '@material-ui/core/Paper';
import { withStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const CustomPaper = withStyles(()=>({
  root:{padding:"30px"}
}))(Paper)

const PrimaryButton = withStyles(()=>({
  "extended":{
    width: "15rem",
    fontSize: "13px",
    margin: "2% 0 0 0"
  }
}))(Fab)

export class EditExpensePage extends React.Component {
  editExpense = (expense) => {

    this.props.editExpense(this.props.match.params.id, expense)
    this.props.history.push("/home")
    this.props.home('HOME')
  }
  removeExpense = (e) => {
    this.props.removeExpense(this.props.expense)
    this.props.history.push("/home")
    this.props.home('HOME')
  }

  cancel=()=>{
    this.props.history.push("/home")
    this.props.home('HOME')
  }

  render() {
    return (
<div>
        {/* <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Edit Expense</h2>
          </div>
        </div> */}
        <div className="page-form_padding">
          <div className="edit-form-container">
          <CustomPaper width="75%">
          <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.editExpense}
        />
        <div className="button_group">
        <PrimaryButton onClick={this.cancel} variant="extended" color="primary" aria-label="cancel"   >
            Cancel
        </PrimaryButton>
        <PrimaryButton onClick={this.removeExpense} variant="extended" color="secondary" aria-label="remove"   >
            Remove
        </PrimaryButton>
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
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  home: (path)=> dispatch(home(path)),
})

export default connect(mapStateToProps, matchDispatchaToProps)(EditExpensePage);