import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth'
import {history} from '../routes/AppRouter'
export const Header = (props) =>{
  const logoutAccount=()=>{
    history.push('/')
    props.logout('UNAUTHORIZED')
  }
  return(
    <header className="header">
      <div className="content-container">
      <div className="header_content">
      <Link to="/home" className="header_title"><h1 >Expensify</h1></Link>
      <button  onClick={logoutAccount}>Logout</button>  
      </div>
      </div>

          
    </header>
  )
}

const mapDispatchToProps = (dispatch)=>({
  logout: (status)=>dispatch(logout(status))
})

export default connect(undefined, mapDispatchToProps)(Header);