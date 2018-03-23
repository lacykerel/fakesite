import React from 'react';
import ReactDOM from 'react-dom';
import AppStyles from './index.css';
import Header from '../components/Header';
import Video from '../components/Video';
import Blurb from '../components/Blurb';
import Footer from '../components/Footer';

ReactDOM.render(
  <div >
    <Header/>
    <Video/>
    <Blurb/>
    <Footer/>
    </div>,
  document.getElementById('app')
);

module.hot.accept();