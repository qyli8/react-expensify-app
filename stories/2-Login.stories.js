
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { LoginPage } from '../src/components/LoginPage'

export default {
  title: 'login',
};

const CustomPaper = withStyles(() => ({
  root: { 
    padding: "10px" ,
    width: "60%"}

}))(Paper)
export const login = () => (
  <CustomPaper>
    <LoginPage />
  </CustomPaper>
  );

login.story = {
  name: 'login page'
}