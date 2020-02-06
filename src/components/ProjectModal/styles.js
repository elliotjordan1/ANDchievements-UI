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
  height: 90vh;
  margin: 20px 10px;
  background-image: ${ ({ image })  => `url(${image})`};
  background-size: cover;
  background-position: center;
  z-index: 1;
  flex-direction: row;
  display: flex;
  @media ${theme.media.tablet}{
    margin: 30px 40px;
    height: 85vh;
  };
  @media ${theme.media.desktop}{
    margin: 30px 40px;
    height: 85vh;
  };
`;

export const HeadingText = styled.div`
  display: block;
  width: max-content;
  text-transform: uppercase;
  text-align: right;
  font-family: ${theme.fontFamily.primary};
  font-weight: 500;
  font-family: 'Roboto';
  letter-spacing: 0.05em;
  line-height: 1;
  bottom: 0;
  color: ${theme.colours.brand.red};
  background-color: black;
  font-size: 30px;
  & > em{
    color: white;
    font-size: 20px;
    font-style: normal;
  }
  @media ${theme.media.tablet}{
    padding: 0 10px;
    font-size: 40px;
    margin: 0 0 0 20px;
    line-height: 1.1;
    & > em{
      color: white;
      font-size: 22px;
      font-style: normal;
    }
  };
  @media ${theme.media.desktop}{
    padding: 0 20px;
    font-size: 50px;
    line-height: 1.1;
    margin: 0 0 0 30px;
    & > em{
      color: white;
      line-height: 0.4;
      font-size: 30px;
      font-style: normal;
    }
  };
`;

export const ProjectBody = styled.div`
  line-height: 1.25;
  background-color: rgba(256, 256, 256, 0.95);
  display: flex;
  flex-direction: column;
  color: ${theme.colours.brand.grey};
  @media ${theme.media.tablet}{
    margin: 0 20px 15px 20px;
    flex-direction: row;
  };
  @media ${theme.media.desktop}{
    margin: 0 30px 25px 30px;
    flex-direction: row;
  }
`;

export const BodyText = styled.div`
  max-width: 100%;
  padding: 5px;
  font-family: ${theme.fontFamily.primary};
  font-size: 12px;
  text-align: justify;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 20vh;
  @media ${theme.media.tablet}{
    padding: 10px;
    font-size: 16px;
    max-height: none;
    max-width: 80%;
  };
  @media ${theme.media.desktop}{
    padding: 20px;
    font-size: 18px;
    max-height: none;
    max-width: 65%;
    line-height: 1.5;
  }
`;

export const ListWrapper = styled.div`
  flex-direction: column;
  padding-bottom: 10px;
  max-width: 100vw;
  @media ${theme.media.tablet}{
    max-width: 30vw;
  };
  @media ${theme.media.desktop}{
    max-width: 60vw;
  }
`;

export const StackedList = styled.ul`
  list-style-type: none;
  font-family: ${theme.fontFamily.primary};
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  margin: 0 8px;
  padding: 10px 0 0 0;
  max-width: 100vw;
  font-size: 18px;
  @media ${theme.media.tablet}{
    max-width: 20vw;
    margin: 0 20px;
    padding: 10px 0 0 0;
    font-size: 22px;
  };
  @media ${theme.media.desktop}{
    max-width: 60vw;
    font-size: 26px;
  }
`;

export const ListItem = styled.li`
  background-image: ${ ({ image })  => `url(${image})`};
  max-width: 100vw;
  font-family: ${theme.fontFamily.primary};
  font-size: 12px;
  text-indent: 40px;
  line-height: 1.6;
  background-repeat: no-repeat;
  background-size: 30px;
  height: 30px;
  margin-bottom: 5px;
  @media ${theme.media.tablet}{
    font-size: 14px;
    text-indent: 30px;
    line-height: 1.6;
    background-repeat: no-repeat;
    background-size: 25px;
    height: 20px;
    margin-bottom: 5px;
  };
  @media ${theme.media.desktop}{
    font-size: 18px;
    text-indent: 40px;
    line-height: 1.6;
    background-repeat: no-repeat;
    background-size: 30px;
    height: 30px;
    margin-bottom: 5px;
  }
`;

export const LogoWrapper = styled.div`
  background-image: ${ ({ image })  => `url(${image})`};
  z-value: 3;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  width: 175px;
  height: 70px;
  @media ${theme.media.tablet}{
    width: 200px;
    margin: 20px;
    height: 75px;
  };
  @media ${theme.media.desktop}{
    width: 300px;
    height: 100px;
  }
`;