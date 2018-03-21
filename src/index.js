import React from 'react';
import ReactDOM from 'react-dom';
import AppStyles from './index.css';
import Header from './components/Header';

ReactDOM.render(
  <div >
    <Header/>
    </div>,
  document.getElementById('app')
);

module.hot.accept();