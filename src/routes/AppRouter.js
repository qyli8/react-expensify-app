import React from "react";
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch} from 'react-router-dom';
import ExpenseSummaryPage from '../components/ExpenseSummaryPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import DashBoardPage from '../components/DashboardPage'

// do need use state then use class component 
// API for browser router expect zero or one route component, more than one route will break
// we can have multiple route components inside a child DOM of browseer router component
// exact indicate whether a component show when the defined path is exactally matching the defined path
// conditionally show components use Swtich component of react-router-dom, move down the route in order and stop at the first match so only first matching route will show
// Route without path will always the match



// anchr tag <a></a> will cause a full page refresh, hence use react router dom components like Link and NavLink

export const history=createHistory()
const AppRouter = ()=> (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/home" component={ExpenseSummaryPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/help" component={HelpPage} />
        <PrivateRoute path="/dashboard" component={DashBoardPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;