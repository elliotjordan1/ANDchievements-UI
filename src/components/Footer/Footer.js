import React from 'react';
import { FooterWrapper, FooterText, FooterDiv } from './styles';

const Header = () => {
  return (
    <FooterWrapper>
        <FooterDiv>
               <FooterText href="https://and.digital/about/">About</FooterText>
        </FooterDiv>
        <FooterDiv>
               <FooterText>/</FooterText>
        </FooterDiv>
        <FooterDiv>
               <FooterText href="https://and.digital/contact/">Contact Us</FooterText>
        </FooterDiv>
        <FooterDiv>
               <FooterText>/</FooterText>
        </FooterDiv>
        <FooterDiv>
               <FooterText href="https://and.digital/join-us/">Join Us</FooterText>
        </FooterDiv>
        <FooterDiv>
               <FooterText>/</FooterText>
        </FooterDiv>
        <FooterDiv>
               <FooterText href="https://and.digital/">AND Digital</FooterText>
        </FooterDiv>
    </FooterWrapper>
  );
};
export default Header;
