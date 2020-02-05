import styled from 'styled-components';
import theme from '../../global/theme';

export const Background = styled.div`
  width: 100vw;
  height 100vh;
  z-index: 2;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 48px;
  @media ${theme.media.tablet}{
    top: 64px;
  };
  @media ${theme.media.desktop}{
    top: 88px;
  };
`;

export const ModalWrapper = styled.div`
  width: auto;
  height: 50vh;
  background-image: ${ ({ image })  => `url(${image})`};
  background-size: cover;
  background-position: center;
  z-index: 1;
  flex-direction: row;
  display: flex;
  @media ${theme.media.tablet}{
    top: 64px;
  };
  @media ${theme.media.desktop}{
    margin: 30px 40px;
    height: 85vh;
  };
`;

export const HeadingText = styled.div`
  display: block;
  width: max-content;
  padding: 0 20px;
  text-transform: uppercase;
  text-align: right;
  font-family: ${theme.fontFamily.primary};
  font-weight: 500;
  font-size: 60px;
  font-family: 'Roboto';
  letter-spacing: 0.05em;
  line-height: 1;
  bottom: 0;
  margin: 0 0 0 30px;
  color: ${theme.colours.brand.red};
  background-color: black;
  & > em{
    color: white;
    font-size: 30px;
    font-style: normal;
  }
`;

export const ProjectBody = styled.div`
  line-height: 1.25;
  margin: 0 30px 25px 30px;
  background-color: white;
  display: flex;
  color: ${theme.colours.brand.grey};
`;

export const BodyText = styled.div`
  max-width: 65%;
  padding: 20px;
  font-size: 20px;
  text-align: justify;
`;

export const ListWrapper = styled.div`
  flex-direction: column;
  padding-bottom: 10px;
`;

export const StackedList = styled.ul`
  font-size: 26px;
  list-style-type: none;
  margin: 0 20px;
  padding: 10px 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  max-width: 35vw;
`;

export const ListItem = styled.li`
  font-size: 18px;
  text-indent: 40px;
  line-height: 1.8;
  background-repeat: no-repeat;
  background-size: 30px;
  height: 30px;
  margin-bottom: 5px;
  background-image: ${ ({ image })  => `url(${image})`};
`;