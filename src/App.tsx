import React from 'react';
import GlobalStyles from './styles/global';
import Routes from './routes/routes';
import { AuthenticationProvider } from './context/AuthenticationContext';

const App: React.FC = () => {
  return (
    <>
      <AuthenticationProvider>
        <Routes />
      </AuthenticationProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
