import React from "react";
import PersonalMenu from "./index.js";
import { BrowserRouter as Router } from "react-router-dom";

export default { title: "PersonalMenu" };
export const withoutProps = () => (
  <Router>
    <PersonalMenu />
  </Router>
);
