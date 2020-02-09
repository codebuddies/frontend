import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// TODO: Remove this test, set up Jest/Cypress specs properly. Disabling
// ESLint here for above reasons. - AC 02/20
// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
