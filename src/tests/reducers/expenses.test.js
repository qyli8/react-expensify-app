import expensesReducers from '../../reducers/expenses'
import expenses from '../fixture/expenses'
import uuid from 'uuid'
import moment from 'moment';

test('should set default state',()=>{
  const state = expensesReducers(undefined,{type:'testing'});
  expect(state).toEqual([])
})

test('should remove expense by id', ()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducers(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expenses if id not found', ()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '123'
  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
})

test('should add an expense', ()=>{
  const expense={
    id:uuid(),
    description: 'Pizza',
    note:'abc', 
    amount:1345, 
    createdAt:moment().valueOf()
  }
  const action ={
    type: 'ADD_EXPENSE',
    expense
  }
  const state=expensesReducers(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('should add an expense', ()=>{
  const updates={
    description: 'Pizza',
    note:'abc', 
    amount:1345, 
    createdAt:moment().valueOf()
  }
  const updatedExpense ={
    ...expenses[0],
    ...updates
  }
  const action ={
    type: 'EDIT_EXPENSE',
    id:expenses[0].id,
    updates
  }
  const state=expensesReducers(expenses, action)
  expect(state).toEqual([updatedExpense, expenses[1], expenses[2]])
})

test('should nt edit expense if expense not found',()=>{
  const updates={
    description: 'Pizza',
    note:'abc', 
    amount:1345, 
    createdAt:moment().valueOf()
  }
  const action ={
    type: 'EDIT_EXPENSE',
    id:'123',
    updates
  }
  const state=expensesReducers(expenses, action)
  expect(state).toEqual(expenses)
})