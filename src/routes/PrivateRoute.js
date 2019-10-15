import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({
  isAuthenticated, 
  component:Component,
  setCurrentPath,
  ...restOfProps
}) =>(
  <Route setCurrentPath={setCurrentPath} {...restOfProps} component={(props)=>(
    isAuthenticated?(
      <div>
        <Component setCurrentPath={setCurrentPath} {...props}/>
      </div>
      ):(
        <Redirect to="/"/>
      )
  )}/>
)

const mapStateToProps =(state)=>({
  isAuthenticated: state.auth.status==="AUTHORIZED"
})

export default connect(mapStateToProps)(PrivateRoute)