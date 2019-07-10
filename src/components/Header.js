import React from "react";
import { NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth'
import {history} from '../routes/AppRouter'
export const Header = (props) =>{
  const logoutAccount=()=>{
    history.push('/')
    props.logout('UNAUTHORIZED')
  }
  return(
    <header>
      <h1>Expensify</h1>
      <NavLink to="/home" activeClassName="is-active" exact={true}>DashBoard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create</NavLink>
      <NavLink to="/help" activeClassName='is-active'>Help</NavLink>
      <button  onClick={logoutAccount}>Logout</button>
    </header>
  )
}

const mapDispatchToProps = (dispatch)=>({
  logout: (status)=>dispatch(logout(status))
})

export default connect(undefined, mapDispatchToProps)(Header);