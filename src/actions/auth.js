export const login=(status)=>({
  type:'LOGED_IN',
  status
})

export const logout=(status)=>({
  type:'LOGED_OUT',
  status
})