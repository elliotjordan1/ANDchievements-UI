import React from 'react';
import { HeaderWrapper } from '../../atom';
import Logo from '../Logo';

const Header = () => {
  return (
    <HeaderWrapper>
      <a href='/'>
        <Logo />
      </a>
    </HeaderWrapper>
  );
};

export default Header;
