import React from 'react';
import Logo from '../Logo';
import Menu from './Menu';
import Button from '../Button';

const Header = () => (
  <div>
    <Logo />
    <Menu />
    <div className="center-center">
      <h1>
        The world's greatest fake site
      </h1>
      <p>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</p>
      <Button text="Do something awesome"/>
    </div>
  </div>
);

export default Header