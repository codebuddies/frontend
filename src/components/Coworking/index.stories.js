import React from "react";
import Coworking from "./index.js";
import { BrowserRouter as Router } from "react-router-dom";

export default { title: "Coworking" };
export const withoutProps = () => (
  <Router>
    <Coworking />
  </Router>
);
