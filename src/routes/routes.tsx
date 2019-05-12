import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { async } from './async-component'
import { NotFound } from './not-found'
import styled from 'styled-components'

const Home = async(() => import(/*webpackChunkName:'home'*/ '../home/home').then(module => module.default))
const LocalStore = async(() => import(/*webpackChunkName:'local-store'*/ '../local-store/local-store').then(module => module.default))

const Navigation = styled.nav({
  // backgroundColor: 'lightgrey',
  a: {
    marginRight: 20,
  }
})

export const Routes: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation>
          <Link to="/">
            <span>Home</span>
          </Link>

          <Link to="/local-store">
            <span>Shared local redux store</span>
          </Link>
        </Navigation>

        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/local-store" component={LocalStore} />
            <Route path="*" component={NotFound} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}
