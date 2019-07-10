import React from 'react'
import {login} from '../actions/auth'
import {connect} from 'react-redux'
export const LoginPage=(props)=>{
  const goToHome=()=>{
    props.history.push("/home")
    props.login('AUTHORIZED')
  }
  return(
    <div>
      <button onClick={goToHome}>Login</button>
    </div>
  )
}

const mapDispatchToProps =(dispatch)=>({
  login: (status)=> dispatch(login(status))
})

export default connect(undefined,mapDispatchToProps)(LoginPage);




