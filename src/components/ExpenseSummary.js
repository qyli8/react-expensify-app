import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import {TotalItems, TotalCost} from '../actions/calculateExpenses'
export const ExpenseSummary = ({expenseTotal, expenseCount}) => 
{
  const cost = numeral(expenseTotal).format('$0,0.00')
  const expenseWord=expenseCount===1?'expense':'expenses'

  return(
    <div>
      { 
        <div>
          <h1>Viewing {expenseCount} {expenseWord}totalling {cost}</h1>
        </div>
      }
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
