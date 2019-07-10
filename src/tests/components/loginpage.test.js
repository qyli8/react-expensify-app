import {LoginPage} from '../../components/LoginPage'
import React from 'react'
import {shallow} from 'enzyme'

test('should render login page', ()=>{
  const wrapper = shallow(<LoginPage/>)
  expect(wrapper).toMatchSnapshot()
})

test('should call login and set status to authorized', ()=>{
  const login=jest.fn()
  const history={
    push:jest.fn()
  }
  const wrapper = shallow(<LoginPage login={login} history={history}/>);
  wrapper.find('button').simulate('click')
  expect(login).toHaveBeenLastCalledWith('AUTHORIZED')
  expect(history.push).toHaveBeenLastCalledWith('/home')
})