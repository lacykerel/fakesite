import React from 'react';
import styles from '../footer.css';

const FooterLinks = () => (
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
      <li><a href="/">Delete</a></li>
    </ul>
  </div>
);

export default FooterLinks;