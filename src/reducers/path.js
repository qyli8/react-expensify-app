const pathReducer = (newPath={path:''}, action) =>{
  switch(action.type){
    case('DASHBOARD'):
      return {path: action.newPath}
    case('HOME'):
      return {path: action.newPath}
    case('CREATE'):
      return {path: action.newPath}
    case('EDIT'):
      return {path: action.newPath}
    default:
        return newPath
  }
}

export default pathReducer
