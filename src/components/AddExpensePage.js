import React from 'react'
import AddExpense from "./AddExpense";
import BasePage from "./BasePage"

export const AddExpensePage = (props) => {
  console.log('edit page props: ' , props)
  return(
  <BasePage title="Add Expense" component={AddExpense} {...props}/>
)}

export default AddExpensePage