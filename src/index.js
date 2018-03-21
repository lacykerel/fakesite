import React from 'react';
import ReactDOM from 'react-dom';
import AppStyles from './index.css';
import Header from './components/Header';
import Video from './components/Video';

ReactDOM.render(
  <div >
    <Header/>
    <Video/>
    </div>,
  document.getElementById('app')
);

module.hot.accept();