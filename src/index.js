import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Menu from './Menu';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
