import React, {useState, useEffect, useContext} from 'react';
import { GlobalProvider } from './context/GlobalState';
import { ProductDetail } from './ProductDetail.jsx'

const App = () => {

  return (
    <GlobalProvider>
      <ProductDetail/>
    </GlobalProvider>
  );
}

export default App;