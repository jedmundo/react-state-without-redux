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
import { GlobalContext } from '../global-context/global-context'

const Home = async(() => import(/*webpackChunkName:'home'*/ '../home/home').then(module => module.default))
const Login = async(() => import(/*webpackChunkName:'login'*/ '../login/login').then(module => module.default))
const LocalStore = async(() => import(/*webpackChunkName:'local-store'*/ '../local-store/local-store').then(module => module.default))

const Navigation = styled.nav({
  // backgroundColor: 'lightgrey',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  a: {
    marginRight: 20,
  }
})

export const Routes: React.FC = () => {

  const { state } = useContext<any>(GlobalContext);

  return (
    <Router>
      <div>
        <Navigation>
          <div>
            <Link to="/">
              <span>Home</span>
            </Link>

            <Link to="/local-store">
              <span>Shared local redux store</span>
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
            <Route path="/local-store" component={LocalStore} />
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}
