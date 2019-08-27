import React from 'react'
import {history} from '../routes/AppRouter'
import { makeStyles} from '@material-ui/core/styles';
import AddCircle from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
const useStyles = makeStyles(theme => ({
  buttonStyle: {
    margin: theme.spacing(1),
    cursor: "pointer",
    width: "20rem"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  addButtonFont:{
    fontSize: "small"
  }
}));
export const ExpenseSummary = () => 
{
  const addExepnse = ()=>{
    history.push("/create")
  }
  
  const classes = useStyles();
  return(
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">Welcome <span>Chris Campbell </span></h2>

        <Fab variant="extended" color="primary" aria-label="add" className={classes.buttonStyle} onClick={addExepnse} >
          <AddCircle className={classes.extendedIcon} />
          <span className={classes.addButtonFont}>expense</span>
        </Fab>
        </div>
    </div>
  )
}




export default ExpenseSummary
