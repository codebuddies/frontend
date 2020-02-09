import React from 'react';
import Nav from './index.js';
import { BrowserRouter as Router } from 'react-router-dom';

export default { title: 'Nav' };
export const withoutProps = () => (
  <Router>
    <Nav />
  </Router>
);
