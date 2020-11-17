import React from 'react';
import GlobalStyles from './styles/global';
import Routes from './routes/routes';
import AppProvider from './context/AppContext';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
