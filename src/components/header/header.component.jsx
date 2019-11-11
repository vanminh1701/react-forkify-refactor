import React from 'react';

import Likes from '../likes/likes.component';
import Search from '../search/search.component';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <img src="img/logo.png" alt="Logo" className="header__logo" />
    <Search />
    <Likes />
  </div>
)

export default Header; 