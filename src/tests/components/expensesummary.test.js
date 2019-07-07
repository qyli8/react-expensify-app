// import {TotalItems, TotalCost} from "../../actions/calculateExpenses"
import {ExpenseSummary} from "../../components/ExpenseSummary"
import {shallow}from 'enzyme'
import React from 'react'

test("should correctly render expense summary with 1 expense",()=>{
  const wrapper=shallow(<ExpenseSummary expenseTotal={123} expenseCount={1} />)
  expect(wrapper).toMatchSnapshot()
  
})

test("should correctlly render expense summary with mutiple expenses",()=>{
  const wrapper=shallow(<ExpenseSummary expenseTotal={6374473740702750873} expenseCount={463} />)
  expect(wrapper).toMatchSnapshot()
})