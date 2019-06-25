//higher order component (HOC) - A component that renders another component (can have many components rendered by the same HOC)
import React from 'react'
import ReactDOM from 'react-dom'

const Info=(props)=>(
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const requireAuthentication = (WrappedComponent)=>{
  return (props)=>(
    <div>
      {props.isAuthenticated?(<div>
        <p>Welcome</p>
        <WrappedComponent {...props}/>
      </div>):
      <p>Please login to view your information</p>      
      }
    </div>
  )

}

const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details"/>, document.getElementById('app'));
// ReactDOM.render(<Info info="There are the details" />, document.getElementById('app'));