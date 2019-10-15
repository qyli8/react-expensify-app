import React from 'react';;
import {connect} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch} from 'react-router-dom';
import ExpendDashBoardPage from '../components/ExpenseDashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import DashBoardPage from '../components/Dashboard'

// do need use state then use class component 
// API for browser router expect zero or one route component, more than one route will break
// we can have multiple route components inside a child DOM of browseer router component
// exact indicate whether a component show when the defined path is exactally matching the defined path
// conditionally show components use Swtich component of react-router-dom, move down the route in order and stop at the first match so only first matching route will show
// Route without path will always the match



// anchr tag <a></a> will cause a full page refresh, hence use react router dom components like Link and NavLink

// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../losecomponents/Header/Header.js";
import Footer from "../losecomponents/Footer/Footer.js";
import GridContainer from "../losecomponents/Grid/GridContainer.js";
import GridItem from "../losecomponents/Grid/GridItem.js";
import Parallax from "../losecomponents/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "../losecomponents/Header/HeaderLinks.js";


import styles from "../assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export const history=createHistory()
const AppRouter = (props)=>{
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
   return(
  <Router history={history}>

<div>
      <Parallax small image="../assets/img/lp.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                {(props.newPath).localeCompare("DASHBOARD")===0&&<h1 className={classes.title}>Welcome JOANNA LI</h1> }
                {(props.newPath).localeCompare("HOME")===0&&<h1 className={classes.title}>Welcome JOANNA LI</h1> }
                {(props.newPath).localeCompare("CREATE")===0&&<h1 className={classes.title}>Add Expense</h1> }
                {(props.newPath).localeCompare("EDIT")===0&&<h1 className={classes.title}>Edit Expense</h1> }
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container} style={{ paddingBottom: "2rem"}}>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/home" component={ExpendDashBoardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/help" component={HelpPage} />
        <PrivateRoute path="/dashboard" component={DashBoardPage}/>
        <Route component={NotFoundPage} />
      </Switch>
</div>
      </div>
      <Footer />
    </div>
    
  </Router>
)
      }
const mapStateToProps= (state) => {
  return {
    newPath: state.newPath.path
  }
}
export default connect(mapStateToProps)(AppRouter);
