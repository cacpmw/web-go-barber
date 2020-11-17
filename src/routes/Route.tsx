import React from 'react';
import {
  RouteProps as ReactRouterDomRouteProperties,
  Route as ReactRouterDomRoute,
  Redirect,
} from 'react-router-dom';
import { useAuthenticationContext } from '../context/AuthenticationContext';

interface RouteProperties extends ReactRouterDomRouteProperties {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProperties> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuthenticationContext();

  return (
    <ReactRouterDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
