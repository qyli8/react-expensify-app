import React from 'react'
import {shallow} from 'enzyme';
import {Header} from '../../components/Header'

test('should render Header corretly', ()=>{
  const wrapper = shallow(<Header logout={()=>{}}/>);
  expect(wrapper).toMatchSnapshot();
})

test('should call logout and set status to unauthorized', ()=>{
  const logout=jest.fn()
  const wrapper = shallow(<Header logout={logout}/>);
  wrapper.find('button').simulate('click')
  expect(logout).toHaveBeenLastCalledWith('UNAUTHORIZED')
})