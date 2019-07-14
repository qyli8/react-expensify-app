import React from 'react'
import {login} from '../actions/auth'
import {connect} from 'react-redux'
export const LoginPage=(props)=>{
  const goToHome=()=>{
    props.history.push("/home")
    props.login('AUTHORIZED')
  }
  return(
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Budget App</h1>
        <p>Keep track of your expenses</p>
        <button className="button-sytle" onClick={goToHome}>Login</button>
      </div>
    </div>
  )
}

const mapDispatchToProps =(dispatch)=>({
  login: (status)=> dispatch(login(status))
})

export default connect(undefined,mapDispatchToProps)(LoginPage);




