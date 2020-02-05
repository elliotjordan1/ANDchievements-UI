import React from 'react';
import Link from 'next/link';
import { FooterWrapper, FooterText, FooterDiv } from './styles';
import Logo from '../Logo';

const Header = () => {
  return (
    <FooterWrapper>
        <FooterDiv>
            <a href="https://and.digital/about/">
               <FooterText>About</FooterText>
            </a>
        </FooterDiv>
        <FooterDiv>
            <div>
               <FooterText>/</FooterText>
            </div>
        </FooterDiv>
        <FooterDiv>
            <a href="https://and.digital/contact/">
               <FooterText>Contact Us</FooterText>
            </a>
        </FooterDiv>
        <FooterDiv>
            <div>
               <FooterText>/</FooterText>
            </div>
        </FooterDiv>
        <FooterDiv>
            <a href="https://and.digital/join-us/">
               <FooterText>Join Us</FooterText>
            </a>
        </FooterDiv>
        <FooterDiv>
            <div>
               <FooterText>/</FooterText>
            </div>
        </FooterDiv>
        <FooterDiv>
            <a href="https://and.digital/">
               <FooterText>AND Digital</FooterText>
            </a>
        </FooterDiv>
    </FooterWrapper>
  );
};
export default Header;
