import React from 'react'
import {history} from '../routes/AppRouter'
import {connect} from 'react-redux'
import {home, dashboard, create} from '../actions/path'
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
export const ExpenseSummary = (props) => 
{
  const addExepnse = ()=>{
    history.push("/create")
    props.create("CREATE")
  }
  const gotoDashboard = ()=>{
    history.push("/dashboard")
    props.home('DASHBOARD')

  }
  const gotoExpanseDashboard = ()=>{
    history.push("/home")
    props.dashboard('HOME')

  }
  const classes = useStyles();
  return(
    <div>
    {
          props.path==="/dashboard"?
    <div className="page-header-dashboard">
      <div className="content-container">

        <Fab variant="extended" color="primary" aria-label="add" className={classes.buttonStyle} onClick={addExepnse} >
          <AddCircle className={classes.extendedIcon} />
          <span className={classes.addButtonFont}>Item</span>
        </Fab>
        
        <Fab variant="extended" color="primary" aria-label="add" className={classes.buttonStyle} onClick={gotoExpanseDashboard} >
          <span className={classes.addButtonFont}>Purchase History</span>
        </Fab>
       
        </div>
    </div>:

    <div className="page-header">
      <div className="content-container">

        <Fab variant="extended" color="primary" aria-label="add" className={classes.buttonStyle} onClick={addExepnse} >
          <AddCircle className={classes.extendedIcon} />
          <span className={classes.addButtonFont}>Item</span>
        </Fab>
          <Fab variant="extended" color="primary" aria-label="add" className={classes.buttonStyle} onClick={gotoDashboard} >
          {/* <AddCircle className={classes.extendedIcon} /> */}
          <span className={classes.addButtonFont}>Dashboard</span>
        </Fab>
        
        </div>
    </div>
     }
    </div>
    
  )
}

const mapDispatchToProps =(dispatch)=>({
  home: (path)=> dispatch(home(path)),
  dashboard: (path)=> dispatch(dashboard(path)),
  create: (path)=> dispatch(create(path))
})

export default connect(undefined,mapDispatchToProps)(ExpenseSummary);


