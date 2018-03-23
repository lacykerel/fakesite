import React, { Component } from 'react';
import Logo from '../Logo';
import Button from '../Button';
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
  }

  render() {
    return (
      <header>
      <nav>
        <Logo />
          <a onClick={() => this.toggleMenu()} className={styles['header-menu-trigger']}>
            <span className={styles['header-menu-icon']}></span>
          </a>
          <div className={styles.slide}>
            <Menu width={240} noOverlay isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right className={styles['menu-nav-wrap']}>
              <a href="#" onClick={() => this.closeMenu()} className={styles['close-button']} title="close"><span>Close</span></a>
              <ul className={styles['nav-list']}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </Menu>
          </div>
          <div className={styles.navbar}>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#"><img src='/img/profile.png'/></a></li>
            </ul>
          </div>
      </nav>
      
      <div className={styles['header-block']}>
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