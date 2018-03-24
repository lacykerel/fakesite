import React from 'react';
import styles from './button.css';

const Button = (props) => (
  <a className={styles.btn} href="/">{props.text}</a>
)

export default Button;