import React from 'react';
import { HeaderWrapper, LogoWrapper } from './styles';
import Logo from '../Logo';
import Link from 'next/link';

const Header = () =>{
  return (
    <HeaderWrapper>
      <Link href="/">
        <LogoWrapper><Logo /></LogoWrapper>
      </Link>
    </HeaderWrapper>
  );
};
export default Header;
