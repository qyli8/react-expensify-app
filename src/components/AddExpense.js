import React from "react";
import ExpenseForm from './ExpressForm'
import { connect } from "react-redux";
import { addExpense } from '../actions/expenses'
import { home } from '../actions/path'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const CustomPaper = withStyles(() => ({
  root: { padding: "30px" }
}))(Paper)
const PrimaryButton = withStyles(() => ({
  "extended": {
    width: "15rem",
    fontSize: "13px",
    margin: "2% 0 0 0"
  }
}))(Fab)

export class AddExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/home')
    this.props.home('HOME')
  }
  cancel = () => {
    this.props.home('HOME')
    this.props.history.push("/home")
  }

  render() {
    return (
      <div className="page-form_padding">
        <div>
        <CustomPaper>
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
          <PrimaryButton onClick={this.cancel} variant="extended" color="primary" aria-label="cancel"   >
            Cancel
        </PrimaryButton>
        </CustomPaper>
      </div>
      </div>
    )
  }
}

const matchDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
  home: (path) => dispatch(home(path)),
})

export default connect(undefined, matchDispatchToProps)(AddExpense)