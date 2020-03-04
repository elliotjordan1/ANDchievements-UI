import React from 'react';
import Link from 'next/link';
import { HeaderWrapper } from '../../atom';
import Logo from '../Logo';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href={{ pathname: '/' }}>
        <Logo />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
