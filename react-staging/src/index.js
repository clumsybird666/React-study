import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import App from './全局事件通信/App'
// import Hello from './components/Hello/hello'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <App /> */}
    {/* <Hello /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  
