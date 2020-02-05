import React from 'react';
import { FooterWrapper, FooterText, FooterDiv } from './styles';

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
