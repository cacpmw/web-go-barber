import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';
import {
  IAuthenticationContextData,
  IAuthenticationData,
} from './ContextInterfaces';

export const AuthenticationContext = createContext<IAuthenticationContextData>(
  {} as IAuthenticationContextData,
);

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [authenticationData, setAuthenticationData] = useState<
    IAuthenticationData
  >(() => {
    const token = localStorage.getItem('@gobarber:token');
    const user = localStorage.getItem('@gobarber:user');
    if (token && user) {
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
    setAuthenticationData({
      token,
      user,
    });
  }, []);
  return (
    <AuthenticationContext.Provider
      value={{ user: authenticationData.user, signIn }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
