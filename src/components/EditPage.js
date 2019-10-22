import React from 'react'
import EditExpense from "./EditExpense";
import BasePage from "./BasePage"

export const EditPage = (props) => {
  console.log('edit page props: ' , props)
  return(
  <BasePage title="Edit Expense" component={EditExpense} {...props}/>
)}

export default EditPage