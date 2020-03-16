import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from './components/Auth/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        authTokens ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { referer: props.location } }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.node,
};

export default PrivateRoute;
