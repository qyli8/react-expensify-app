import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
export const ExpendDashBoardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  
  </div>
);

export default  ExpendDashBoardPage;