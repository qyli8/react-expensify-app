import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

export const PublicRoute = ({
  notAuthenticated,
  component: Component,
  ...restOfProps
})=>(
 <Route {...restOfProps} component={(props)=>(
  notAuthenticated?(<Component {...props}/>):(<Redirect to="/home"/>)
  )
}/>
)

const mapStateToProps =(state)=>({
  notAuthenticated: state.auth.status!=="AUTHORIZED"
})
export default connect(mapStateToProps)(PublicRoute)