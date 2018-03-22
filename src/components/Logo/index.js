import React, { Component } from 'react';
import LogoImg from './logo.png';
import styles from './logo.css';

const Logo = () => (
  <div className={styles.logo}><img src={LogoImg} /></div> 
)

export default Logo;