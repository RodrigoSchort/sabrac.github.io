import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo1.png';
import './navbar.css';

const Navbar = ({ englishLanguage }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">{englishLanguage ? "Home" : "Início"}</a></p>
          <p><a href="#wgpt3">{englishLanguage ? "About" : "Sobre"}</a></p>
          <p><a href="#possibility">{englishLanguage ? "History" : "História"}</a></p>
          <p><a href="#features">{englishLanguage ? "Actions" : "Ações"}</a></p>
          <p><a href="#blog">{englishLanguage ? "Contact Us" : "Contato"}</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine data-testid="menu-icon" color="#4F4F4F" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line data-testid="menu-icon" color="#4F4F4F" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">{englishLanguage ? "Home" : "Início"}</a></p>
              <p><a href="#wgpt3">{englishLanguage ? "About" : "Sobre"}</a></p>
              <p><a href="#possibility">{englishLanguage ? "History" : "História"}</a></p>
              <p><a href="#features">{englishLanguage ? "Actions" : "Ações"}</a></p>
              <p><a href="#blog">{englishLanguage ? "Contact Us" : "Contato"}</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
