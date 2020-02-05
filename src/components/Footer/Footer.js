import React from 'react';
import Link from 'next/link';
import { FooterWrapper, FooterText, JaiBox } from './styles';
import Logo from '../Logo';

const Header = () => {
  return (
    <FooterWrapper>
    <JaiBox>
        <a href="https://and.digital/about/">
           <FooterText>About</FooterText>
        </a>
    </JaiBox>
    <JaiBox>
        <div>
           <FooterText>/</FooterText>
        </div>
    </JaiBox>
    <JaiBox>
        <a href="https://and.digital/contact/">
           <FooterText>Contact Us</FooterText>
        </a>
    </JaiBox>
    <JaiBox>
        <div>
           <FooterText>/</FooterText>
        </div>
    </JaiBox>
    <JaiBox>
        <a href="https://and.digital/join-us/">
           <FooterText>Join Us</FooterText>
        </a>
    </JaiBox>
    <JaiBox>
        <div>
           <FooterText>/</FooterText>
        </div>
    </JaiBox>
    <JaiBox>
        <a href="https://and.digital/">
           <FooterText>AND Digital</FooterText>
        </a>
    </JaiBox>
    </FooterWrapper>
  );
};
export default Header;
