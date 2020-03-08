import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './App.css';
import AuthContext from './components/Auth/AuthContext';
import About from './components/About';
import Resources from './components/Resources';
import Home from './components/Home';
import Nav from './components/Nav';
import LoginForm from './components/Auth/LoginForm.js';
import SignUpForm from './components/Auth/SignUpForm.js';
import Coworking from './components/Coworking';
import SubmitResource from './components/Resources/submitResource';
import ResourcePage from './components/Resources/ResourcePage.js';

function App() {
  const userData = localStorage.getItem('userData') || { username: '' };
  return (
    <Router>
      <Container>
        <AuthContext.Provider value={userData}>
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
            <Route path="/coworking">
              <Coworking />
            </Route>
            <Route
              path="/resources/:id"
              render={matchProps => <ResourcePage matchProps={matchProps} />}
            />
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/submit-resource">
              <SubmitResource />
            </Route>
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
