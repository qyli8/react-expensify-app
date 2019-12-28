export const login=(status)=>({
  type:'LOGED_IN',
  status
})

export const logout=(status)=>({
  type:'LOGED_OUT',
  status
})

export const sessionLogin =(status)=> {
  
  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.
  localStorage.setItem("loginStatus", status)
  return (dispatch ) => {
    dispatch(login(status));
  };
  
}

export const clearSession=(status)=>{
  localStorage.removeItem("loginStatus")
  console.log("clearing")
  return(dispatch)=>{
    dispatch(logout(status))
  }
}