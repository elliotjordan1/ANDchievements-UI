import React from 'react';
import Link from 'next/link';
import { HeaderWrapper, LogoWrapper } from './styles';
import Logo from '../Logo';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Link>
    </HeaderWrapper>
  );
};
export default Header;
