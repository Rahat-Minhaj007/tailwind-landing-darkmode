import React from 'react';
import AppProvider from './context';
import Home from './Screens/Home';

const App = () => {
  return (
    <>
      <AppProvider>
        <Home />
      </AppProvider>

    </>
  );
};

export default App;
