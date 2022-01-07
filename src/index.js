import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// const traverseParents = (node) => {
//   if (node.parentNode.id === 'app') {
//     return;
//   };
//   if (node.parentNode.id === 'QAs'
//       || node.parentNode.id === 'Overview'
//       || node.parentNode.id === 'Related_Products'
//       || node.parentNode.id === 'RatingsAndReviews')
//   {
//     return node.parentNode.id;
//   };
//   if (node.parentNode) {
//     return traverseParents(node.parentNode);
//   };
// };

// const handleClick = (event) => {
//   var date = new Date();
//   console.log('TIME: ', date);
//   let element = event.target;
//   let found = traverseParents(element);
//   console.log(found);
// };

// const app = document.getElementById('app');
// app.addEventListener('click', handleClick);

ReactDOM.render(<App />, document.getElementById('app'));