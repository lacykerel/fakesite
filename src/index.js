import React from 'react';
import ReactDOM from 'react-dom';
import AppStyles from './assets/css/base.css'
import Header from './components/Header';

const title = 'Minimal React';

ReactDOM.render(
  <div>
    <Header/>
    </div>,
  document.getElementById('app')
);

module.hot.accept();