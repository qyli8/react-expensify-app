
const modalReducer=(state={open:false}, action)=>{

    switch(action.type){
      case "MODAL_OPEN":
        return({
          open: true
        })
      case "MODAL_CLOSE":
        return({
          open: false
        })
      default:
        return state
    }
}

export default modalReducer