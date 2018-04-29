import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddUserPage from '../components/AddUserPage';
import DashboardPage from '../components/DashboardPage';
import EditUserPage from '../components/EditUserPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path='/create' component={AddUserPage} />
        <PrivateRoute path="/edit/:id" component={EditUserPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
