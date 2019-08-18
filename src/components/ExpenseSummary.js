import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import {TotalItems, TotalCost} from '../actions/calculateExpenses'
import {history} from '../routes/AppRouter'
import { makeStyles} from '@material-ui/core/styles';
import AddCircle from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
const useStyles = makeStyles(theme => ({
  buttonStyle: {
    margin: theme.spacing(1),
    cursor: "pointer",
    width: "10%"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
export const ExpenseSummary = ({expenseTotal, expenseCount}) => 
{
  const cost = numeral(expenseTotal).format('$0,0.00')
  const expenseWord=expenseCount===1?'expense':'expenses'
  const addExepnse = ()=>{
    history.push("/create")
  }
  
  const classes = useStyles();
  return(
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">Viewing <span>{expenseCount} </span>{expenseWord} totalling <span>{cost}</span></h2>
        {/* <button className="button-sytle" onClick={addExepnse}><AddCircle size="medium" />Add Expense</button> */}
        <Fab variant="extended" color="primary" aria-label="add" className={classes.buttonStyle} size="large">
          <AddCircle className={classes.extendedIcon} />
          Add Expense
        </Fab>
        </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
  
    expenseTotal: TotalCost(getVisibleExpenses(state.expenses, state.filter)),
    expenseCount: TotalItems(getVisibleExpenses(state.expenses, state.filter))
  }
}


export default connect(mapStateToProps)(ExpenseSummary)
