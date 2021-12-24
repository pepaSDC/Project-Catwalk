import React, {useState, useEffect, useContext} from 'react';
import { GlobalProvider } from './context/GlobalState';

import Routing from './Routing.jsx'

const App = () => {

  return (
    <GlobalProvider>
      <Routing/>
    </GlobalProvider>
  );
}

export default App;