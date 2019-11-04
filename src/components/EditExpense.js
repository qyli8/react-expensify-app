import React from "react";
import { connect } from 'react-redux'
import ExpenseForm from './ExpressForm'
import { editExpense, removeExpense } from '../actions/expenses'
import {ModalOpen, ModalClose} from '../actions/modal'
import Paper from '@material-ui/core/Paper';
import { withStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteModal from './DeleteModal'

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
        <PrimaryButton onClick={this.props.openModal} variant="extended" color="secondary" aria-label="remove"   >
            Remove
        </PrimaryButton>
        <DeleteModal
              description={this.props.expense.description}
              removeExpense={ ()=>{this.removeExpense(); this.props.closeModal()}}
            />
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
  openModal: ()=>dispatch(ModalOpen()),
  closeModal:()=>(dispatch(ModalClose()))
})

export default connect(mapStateToProps, matchDispatchaToProps)(EditExpensePage);