import React, {useState, useEffect, useContext} from 'react';
import { GlobalProvider } from './context/GlobalState';

import { Routes } from './Routes.jsx'

const App = () => {

  return (
    <GlobalProvider>
      <Routes/>
    </GlobalProvider>
  );
}

export default App;