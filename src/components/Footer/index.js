import React from 'react';
import FooterLinks from './FooterLinks';
import Logo from '../Logo';
const Footer = () => (
  <footer>
    <FooterLinks/>
    <hr/>
    <div className='logo-privacy'>
      <Logo />
      <ul className='privacy-links'>
        <li><a href="/">Terms</a></li>
        <li><a href="/">Privacy</a></li>
        <li><a href="/">Site Map</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;