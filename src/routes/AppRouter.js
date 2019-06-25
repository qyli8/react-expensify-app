import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpendDashBoardPage from '../components/ExpendExpense'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

// do need use state then use class component 
// API for browser router expect zero or one route component, more than one route will break
// we can have multiple route components inside a child DOM of browseer router component
// exact indicate whether a component show when the defined path is exactally matching the defined path
// conditionally show components use Swtich component of react-router-dom, move down the route in order and stop at the first match so only first matching route will show
// Route without path will always the match



// anchr tag <a></a> will cause a full page refresh, hence use react router dom components like Link and NavLink


const AppRouter = ()=> (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpendDashBoardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
