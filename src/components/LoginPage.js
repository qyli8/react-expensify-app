import React from 'react'
import {login} from '../actions/auth'
import {dashboard} from '../actions/path'
import {connect} from 'react-redux'

export const LoginPage=(props)=>{
  const goToDashboard=()=>{
    props.history.push("/dashboard")
    props.login('AUTHORIZED')
    props.dashboard('DASHBOARD')
    // console.log(props.setCurrentPath('/dashboard'))
  }
  return(
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Budget App</h1>
        <p>Keep track of your expenses</p>
        <button className="button-sytle" onClick={goToDashboard}>Login</button>
      </div>
    </div>
  )
}

const mapDispatchToProps =(dispatch)=>({
  login: (status)=> dispatch(login(status)),
  dashboard: (path)=> dispatch(dashboard(path))
})

export default connect(undefined,mapDispatchToProps)(LoginPage);




