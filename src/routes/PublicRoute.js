import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

export const PublicRoute = ({
  notAuthenticated,
  component: Component,
  setCurrentPath,
  ...restOfProps
})=>(
 <Route setCurrentPath={setCurrentPath} {...restOfProps} component={(props)=>(
  notAuthenticated?(<Component setCurrentPath={setCurrentPath} {...props}/>):(<Redirect to="/dashboard"/>)
  )
}/>
)

const mapStateToProps =(state)=>({
  notAuthenticated: state.auth.status!=="AUTHORIZED"
})
export default connect(mapStateToProps)(PublicRoute)