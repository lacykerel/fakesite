import React from 'react';
import styles from './footer.css';
import Logo from '../Logo';
const Footer = () => (
  <section className={styles.footer}>
    <div className={styles['footer-link-wrap']}>
      <ul className={styles['footer-links']}>
        <p className={styles['footer-link-title']}>Fakesite</p>
        <li><a href="/">About us</a></li>
        <li><a href="/">Press</a></li>
        <li><a href="/">Policies</a></li>
        <li><a href="/">Help</a></li>
      </ul>
      <ul className={styles['footer-links']}>
        <p className={styles['footer-link-title']}>Account</p>
        <li><a href="/">Edit Profile</a></li>
        <li><a href="/">Friends</a></li>
        <li><a href="/">Social</a></li>
        <li><a href="/">Delete Profile</a></li>
      </ul>
    </div>
    <hr />
    <div className={styles['logo-privacy']}>
      <Logo />
      <div className={styles['privacy-link-wrap']}>
        <ul className={styles['privacy-links']}>
          <li><a href="/">Terms</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Site Map</a></li>
        </ul>
      </div>
    </div>
  </section>
);

export default Footer;