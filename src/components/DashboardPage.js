import React from 'react'
import DashBoard from "./Dashboard";
import BasePage from "./BasePage"

export const DashBoardPage = (props) => {
  console.log('edit page props: ' , props)
  return(
  <BasePage title="WELCOME Joanna Li" component={DashBoard} {...props}/>
)}

export default DashBoardPage

