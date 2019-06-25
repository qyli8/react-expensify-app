import React from 'react'
import {shallow} from 'enzyme';
import moment from 'moment'
import ExpenseForm from '../../components/ExpressForm'
import expenses from '../fixture/expenses'

test('should return expense form',()=>{
  const wrapper = shallow(<ExpenseForm/>)
  expect(wrapper).toMatchSnapshot()

})
test('should return expense form with expese data',()=>{
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
  expect(wrapper).toMatchSnapshot()

})

test('should render error for invalid form submission',()=>{
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: ()=>{}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', ()=>{
  const value="New Description"
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target:{value}
  })
  expect(wrapper.state('description')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('should set note on text change', ()=>{
  const value="some notes"
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').at(0).simulate('change', {
    target:{value}
  })
  expect(wrapper.state('note')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('should set amount if valid',()=>{
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change',{
    target: {value}
  })
  expect(wrapper.state('amount')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('should not set amount if invalid input',()=>{
  const value ='12.222'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change',{
    target: {value}
  })
  expect(wrapper.state('amount')).toBe('')
  expect(wrapper).toMatchSnapshot()
  
})

test('should call onsubmit prop for valid form submission',()=>{
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault:()=>{}
  });
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
      "description": expenses[0].description, 
      "amount": parseFloat(expenses[0].amount), 
      "note": expenses[0].note,
      "createdAt": expenses[0].createdAt
    })
})

test('should set new date on date change', ()=>{
  const now = moment();
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendar focus on change',()=>{
  const focused = true
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
  expect(wrapper.state('calendarFocused')).toBe(focused)
})
