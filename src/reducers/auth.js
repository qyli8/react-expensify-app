const authReducer = (state={status:'UNAUTHORIZED'}, action) =>{
  switch(action.type){
    case('LOGED_IN'):
      return {status: action.status}
    case('LOGED_OUT'):
      return {status: action.status}
    default:
        return state
  }
}

export default authReducer
