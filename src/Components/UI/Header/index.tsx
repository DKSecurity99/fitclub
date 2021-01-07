import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <article className="header__container">
        <h3 className="header__logo">Fitclub</h3>
        <a className="header__btn-login" href="https://github.com/DKSecurity99">
          Login
          <FiArrowRight size="1.8rem" color="#fff"/>
        </a>
      </article>
    </div>
  </header>
);

export default Header;
