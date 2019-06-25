import React from 'react';
import {shallow} from 'enzyme';
import {NotFoundPage} from '../../components/NotFoundPage'

test('should return page not found',()=>{
  const wrapper = shallow(<NotFoundPage/>)
  expect(wrapper).toMatchSnapshot()
})