import React from 'react';
import {shallow} from 'enzyme'
import ExpendDashBoardPage from '../../components/DashboardPage'
test('should return expenses dashborad page', ()=>{
  const wrapper = shallow(<ExpendDashBoardPage />);
  expect(wrapper).toMatchSnapshot()
})