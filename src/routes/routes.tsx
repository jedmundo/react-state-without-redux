import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import styled from 'styled-components'

import { async } from './async-component'
import { NotFound } from './not-found'
import { GlobalContext } from '../store/global-context'

const Home = async(() => import(/*webpackChunkName:'home'*/ '../pages/home/home').then(module => module.default))
const Login = async(() => import(/*webpackChunkName:'login'*/ '../pages/login/login').then(module => module.default))
const Dashboard = async(() => import(/*webpackChunkName:'dashboard'*/ '../pages/dashboard/dashboard').then(module => module.default))

const Navigation = styled.nav({
  backgroundColor: 'lightblue',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  'a, p': {
    margin: 20,
  }
})

export const Routes: React.FC = () => {

  const { state } = useContext(GlobalContext);

  return (
    <Router>
      <div>
        <Navigation>
          <div>
            <Link to="/">
              <span>Home</span>
            </Link>

            <Link to="/dashboard">
              <span>Dashboard</span>
            </Link>

            <Link to="/login">
              <span>Login</span>
            </Link>
          </div>

          <p>{state.username}</p>
        </Navigation>

        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}
