import React from 'react';
import Link from 'next/link';
import HeaderWrapper from '../../atom/HeaderWrapper';
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
