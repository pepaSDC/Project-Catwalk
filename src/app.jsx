import React from 'react';
import api from './api.js';

const App = (props) => {

  api.getAllProducts((results) => {
    console.log(results);
  });

  return (
    <div>Hello React</div>
  );

}


export default App;
