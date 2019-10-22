import React from 'react'
import ExpenseSummary from "./ExpenseSummary";
import BasePage from "./BasePage"

export const ExpenseSummaryPage = (props) => {
  console.log('edit page props: ' , props)
  return(
  <BasePage title="WELCOME Joanna Li" component={ExpenseSummary} {...props}/>
)}

export default ExpenseSummaryPage

