export const login = (status) => ({
  type: 'LOGED_IN',
  status
})

export const logout = (status) => ({
  type: 'LOGED_OUT',
  status
})

export const sessionLogin = (status) => {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.


  return (dispatch) => {
    Promise.all([localStorage.setItem("loginStatus", status)]).then(() => dispatch(login(status))).then(() => { console.log("login DONE!") })
  };

}

export const clearSession = (status) => {
  return (dispatch) => {
    Promise.all([localStorage.removeItem("loginStatus")]).then(() => dispatch(logout(status)))
  }
}