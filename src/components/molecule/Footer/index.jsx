import React from 'react';
import FooterWrapper from '../../atom/FooterWrapper';
import FooterText from '../../atom/FooterText';
import FooterDiv from '../../atom/FooterTextContainer';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterDiv>
            <FooterText href="https://and.digital/about/" text ="About" />
      </FooterDiv>
      <FooterDiv>
            <FooterText text = "/" />
      </FooterDiv>
      <FooterDiv>
            <FooterText href="https://and.digital/contact/" text = "Contact Us" />
      </FooterDiv>
      <FooterDiv>
            <FooterText text = "/" />
      </FooterDiv>
      <FooterDiv>
            <FooterText href="https://and.digital/join-us/" text = "Join Us" />
      </FooterDiv>
      <FooterDiv>
            <FooterText text = "/" />
      </FooterDiv>
      <FooterDiv>
            <FooterText href="https://and.digital/" text = "AND Digital" />
      </FooterDiv>
    </FooterWrapper>
  );
};

export default Footer;
