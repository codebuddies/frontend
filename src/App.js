import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './App.css';
import { AuthContext } from './components/Auth/AuthContext';
import About from './pages/About';
import Resources from './pages/Resources';
import Home from './pages/Home';
import Nav from './pages/pageSections/Nav';
import LoginForm from './components/Auth/LoginForm.js';
import SignUpForm from './components/Auth/SignUpForm.js';
import Connect from './pages/Connect';
import Profile from './pages/Profile';
import ResourceSubmit from './pages/Resources/ResourceSubmit';
import ResourcePage from './pages/Resources/ResourcePage.js';
import PrivateRoute from './PrivateRoute';

function App() {
  const [authTokens, setAuthTokens] = useState(
    JSON.parse(localStorage.getItem('tokens')) || null
  );
  const setTokens = data => {
    // TODO: Consider using cookies instead of JSON tokens
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <Router>
      <Container>
        <AuthContext.Provider
          value={{ authTokens: authTokens, setAuthTokens: setTokens }}
        >
          <Nav />
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/signup">
              <SignUpForm />
            </Route>
            <Route path="/connect">
              <Connect />
            </Route>
            <PrivateRoute path="/profile" component={Profile} />
            <Route
              path="/resources/:guid"
              render={matchProps => <ResourcePage matchProps={matchProps} />}
            />
            <Route path="/resources">
              <Resources getResourcesUrl="/api/v1/resources" />
            </Route>
            <PrivateRoute path="/resources/submit" component={ResourceSubmit} />
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </AuthContext.Provider>
      </Container>
    </Router>
  );
}

export default App;
