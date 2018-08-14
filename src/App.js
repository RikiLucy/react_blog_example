import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { PublicContainer } from './containers';
import { IndexPage, AllPostsPage, TopPostsPage, PostPage } from './pages';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <PublicContainer>
        <Component {...props} />
      </PublicContainer>
    )
    }
  />
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path="/" exact component={IndexPage} />
      <PublicRoute path="/all" exact component={AllPostsPage} />
      <PublicRoute path="/top" exact component={TopPostsPage} />
      <PublicRoute path="/post/:id" exact component={PostPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
