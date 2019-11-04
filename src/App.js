import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.css";
import About from "./components/About";
import Resources from "./components/Resources";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Coworking from "./components/Coworking";
import SubmitResource from "./components/Resources/submitResource";
import ResourcePage from "./components/Resources/ResourcePage";

function App() {
  return (
    <Router>
      <Container>
        <Nav />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
