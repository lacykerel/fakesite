import React, { Component } from 'react';
import Logo from '../Logo';
import Button from '../Button';
import Background from './hero-image.png';
import styles from './header.css';
import { slide as Menu } from 'react-burger-menu';


class Header extends Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
    console.log(this.state.menuOpen, 'menu')
  }

  render() {
    return (
      <header style={{backgroundImage: "url(" + Background + ")"}}>
      <nav>
        <Logo />
          <a onClick={() => this.toggleMenu()} id="header-menu-trigger">
            <span className={styles['header-menu-icon']}></span>
          </a>
          <div id="slide">
          <Menu width={ 240 } noOverlay isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right className="menu-nav-wrap">
            <a href="#" onClick={() => this.closeMenu()} className="close-button" title="close"><span>Close</span></a>
              <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Help</a></li>
              </ul>
          </Menu>
          </div>
      </nav>
      
      <div className="">
        <h1>
          The world's greatest fake site
        </h1>
        <p className={styles['header-copy']}>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</p>
        <Button text="Do something awesome"/>
      </div>
    </header>
    )
  }
};

export default Header