import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppVarTest from './AppVarTest'
import reportWebVitals from './reportWebVitals';
import AppNull from './null_test'
import AppAddStyle from './app_add_style';
import AppAddStyleDirect from './app_add_style_direct';
import AppTestCss from './add_css';
import StateTest from './state_test';
import StateTestWithoutConstructor from './state_class_wo_constructor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateTestWithoutConstructor />
    <StateTest />
      <AppTestCss />
    <AppAddStyleDirect />
    <AppAddStyle />
    <AppNull />
    <AppVarTest />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
