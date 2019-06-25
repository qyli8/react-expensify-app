import React from 'react';
import {ListItems} from '../../components/ExpenseListItems';
import {shallow} from 'enzyme';
import expenses from '../fixture/expenses'

test('should return ListItem', ()=>{
  const wrapper = shallow(<ListItems  {...expenses[1]}/>)
  expect(wrapper).toMatchSnapshot()
})
