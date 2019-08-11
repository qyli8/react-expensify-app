import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSumary from './ExpenseSummary'
export const ExpendDashBoardPage = () => (
  <div className="bottom_margin">
    <ExpenseSumary />
    <ExpenseListFilters />
    <ExpenseList />
  
  </div>
);

export default  ExpendDashBoardPage;