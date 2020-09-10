import React from 'react';
import Resources from './index.js';
import { BrowserRouter as Router } from 'react-router-dom';

export default { title: 'Resources' };
export const withoutProps = () => (
  <Router>
    <Resources />
  </Router>
);
