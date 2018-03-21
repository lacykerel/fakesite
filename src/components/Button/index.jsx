import React from 'react';
import ButtonStyles from './style.css';

const Button = (props) => (
  <a className="btn" href="/">{props.text}</a>
)

export default Button;