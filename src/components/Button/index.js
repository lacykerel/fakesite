import React from 'react';
import ButtonStyles from './button.css';


const Button = (props) => (
  <a className="btn" href="/">{props.text}</a>
)

export default Button;