import React from 'react';
import { AuthenticationProvider } from './AuthenticationContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthenticationProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthenticationProvider>
  );
};
export default AppProvider;
