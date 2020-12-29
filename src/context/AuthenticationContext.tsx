import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import {
  IAuthenticationContextData,
  IAuthenticationData,
  User,
} from './interfaces/AuthenticationContextInterfaces';

// context api
const AuthenticationContext = createContext<IAuthenticationContextData>(
  {} as IAuthenticationContextData,
);

// authentication hook
function useAuthenticationContext(): IAuthenticationContextData {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error(
      'useAuthenticationContext must be used within an AuthenticationProvider',
    );
  }
  return context;
}

// component
const AuthenticationProvider: React.FC = ({ children }) => {
  // Initialize auth data if there any on localstorage otherwise set it to empty
  const [authenticationData, setAuthenticationData] = useState<
    IAuthenticationData
  >(() => {
    const token = localStorage.getItem('@gobarber:token');
    const user = localStorage.getItem('@gobarber:user');
    if (token && user) {
      // automagically injects the token to every api call
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }
    return {} as IAuthenticationData;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem('@gobarber:token', token);
    localStorage.setItem('@gobarber:user', JSON.stringify(user));
    // automagically injects the token to every api call
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticationData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    const token = localStorage.getItem('@gobarber:token');
    const user = localStorage.getItem('@gobarber:user');
    if (token && user) {
      localStorage.removeItem('@gobarber:token');
      localStorage.removeItem('@gobarber:user');
    }
  }, []);

  const updateUserData = useCallback(
    (user: User) => {
      setAuthenticationData({
        token: authenticationData.token,
        user,
      });
      localStorage.setItem('@gobarber:user', JSON.stringify(user));
    },
    [authenticationData.token],
  );
  return (
    <AuthenticationContext.Provider
      value={{ user: authenticationData.user, signIn, signOut, updateUserData }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider, useAuthenticationContext };
