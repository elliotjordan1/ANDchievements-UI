import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';
import FooterDiv from '../../atom/FooterTextContainer';
import FooterText from '../../atom/FooterText';
import FooterWrapper from '../../atom/FooterWrapper';

describe('Footer component', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Footer>
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
      </Footer>);
    expect(wrapper).toMatchSnapshot();
  });
});
