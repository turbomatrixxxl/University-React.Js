import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

PrivateRoute.propTypes = {
  component: PropTypes.element,
  redirectTo: PropTypes.string,
};
