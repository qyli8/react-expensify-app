import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixture/expenses'
import {EditExpensePage} from '../../components/EditExpense'
import moment from 'moment'

let editExpense, removeExpense, wrapper, history
beforeEach(()=>{
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = {push: jest.fn()}
  const id=expenses[1].id
  wrapper = shallow(<EditExpensePage 
    expense={expenses[1]}
    editExpense={editExpense}
    removeExpense={removeExpense}
    match={{params:{id}}}
    history={history}
    />)
})

test('should render edit expense',()=>{
  expect(wrapper).toMatchSnapshot()
})

test('should handle EditExpense',()=>{
  const editedExpense={
    note:'abc',
    amount:'50671111',
    createdAt:moment(0).subtract(10, 'days').valueOf()
  }
  wrapper.find('ExpenseForm').prop('onSubmit')(editedExpense)
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,editedExpense)
  expect(history.push).toHaveBeenLastCalledWith("/")
})

test('should handle remove expense',()=>{
  wrapper.find('button').simulate('click')
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith("/")
})