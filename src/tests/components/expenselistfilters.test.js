import React from 'react';
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixture/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
  setTextFilter=jest.fn();
  sortByDate=jest.fn();
  sortByAmount=jest.fn();
  setStartDate=jest.fn();
  setEndDate=jest.fn();
  wrapper= shallow(<ExpenseListFilters
    filters={filters} 
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}    
  />)
})

test('Should render ExpenseListFilters correctly',()=>{
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters correctly with altered filters',()=>{
  wrapper.setProps({filters: altFilters})
  expect(wrapper).toMatchSnapshot()
})

//should handle text changes
test('should handle text changes',()=>{
  const value = "test text"
  const e={target:{value}}
  wrapper.find('input').simulate('change',e)
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})
//should sort by date
test('should sort by date',()=>{
  const value="date"
  const e={target:{value}}
  wrapper.find('select').simulate('change',e)
  expect(sortByDate).toHaveBeenLastCalledWith()
})
//should sort by amount
test('should sort by amount',()=>{
  const value="amount"
  const e={target:{value}}
  wrapper.find('select').simulate('change',e)
  expect(sortByAmount).toHaveBeenLastCalledWith()
})
//should handle date changes
test('should handle date changes',()=>{
  const startDate=moment(0)
  const endDate=moment(0).add(3,'days')
  const e={startDate, endDate}
  wrapper.find('DateRangePicker').prop('onDatesChange')(e)
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})
//should handle date focus changes
test('should handle date focus changes',()=>{
  const calendarFocused='endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})