import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Age } from './DataShow/Age';
import { Frontpage } from './DataShow/Frontpage';
// import { Button } from './buttons different-count/Button';
// import { Buttons } from './Buttons same-count/Buttons';
// import { App1 } from './Router/app1';
// import { Ex1 } from './probs/ex1';
// import { Ex2 } from './probs/Ex2';
// import { Ex1 } from './probs/ex1';
// import { Ex2 } from './probs/Ex2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App1/> */}
  {/* <Ex2/> */}
  {/* <Button/> */}
  {/* <Age/> */}
  <Frontpage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
