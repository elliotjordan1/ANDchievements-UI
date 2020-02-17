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
  z-index: 1;
  flex-direction: column;
  display: flex;
  @media ${theme.media.tablet}{
    margin: 30px 40px;
    flex-direction: row;
    height: 85vh;
  };
  @media ${theme.media.desktop}{
    margin: 30px 40px;
    height: 85vh;
  };
`;

export const Image = styled.div`
  background-image: ${ ({ image })  => `url(${image})`};
  background-size: cover;
  background-position: center;
  padding-top: 200px;
  width: 100%;
  display: flex;
  @media ${theme.media.tablet}{
    width: 60%;
    padding: 0;
    height: 100%;
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
  };
  @media ${theme.media.desktop}{
    background-size: cover;
  }
`;

export const LogoWrapper = styled.div`
  background-image: ${ ({ image })  => `url(${image})`};
  z-value: 3;
  display: flex;
  align-self: flex-end;
  background-size: contain;
  background-repeat: no-repeat;
  width: 175px;
  height: 70px;
  @media ${theme.media.tablet}{
    width: 200px;
    height: 75px;
  };
  @media ${theme.media.desktop}{
    width: 300px;
    height: 100px;
  }
`;

export const HeadingText = styled.div`
  display: block;
  width: 100% - 20px;
  text-transform: uppercase;
  height: min-content;
  font-family: ${theme.fontFamily.primary};
  font-weight: 500;
  font-family: 'Roboto';
  letter-spacing: 0.05em;
  padding: 2px 10px;
  line-height: 1;
  color: ${theme.colours.brand.red};
  background-color: ${theme.colours.brand.grey2};
  font-size: 28px;
  & > em{
    color: ${theme.colours.brand.grey};
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
  }
  @media ${theme.media.tablet}{
    line-height: 1.1;  
    font-size: 28px;
    padding: 10px 10px;
    & > em{
      color: ${theme.colours.brand.grey};
      font-size: 22px;
      font-weight: 300;
      font-style: normal;
    }
  };
  @media ${theme.media.desktop}{
    font-size: 38px;
    line-height: 1.1;
    & > em{
      color: ${theme.colours.brand.grey};
      line-height: 0.4;
      font-size: 32px;
      font-weight: 300;
      font-style: normal;
    }
  };
`;

export const ProjectBody = styled.div`
  line-height: 1.25;
  background-color: white;
  display: flex;  
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: ${theme.colours.brand.grey};
  @media ${theme.media.tablet}{
    width: 40%;
    min-width: 280px;
  };
  @media ${theme.media.desktop}{
    min-width: 530px;
  }
`;

export const BodyText = styled.div`
  max-width: 100%;
  padding: 16px 20px 0 20px;
  font-family: ${theme.fontFamily.primary};
  font-size: 12px;
  font-weight: 300;
  text-align: justify;
  max-height: 9em;
  @media ${theme.media.tablet}{
    font-size: 16px;
  };
  @media ${theme.media.desktop}{
    font-size: 24px;
    line-height: 1.5;
  }
`;

export const StackedList = styled.div`
  list-style-type: none;
  font-family: ${theme.fontFamily.primary};
  font-weight: 400;
  line-height: 2.4;
  letter-spacing: 0.1em;
  color: ${theme.colours.brand.grey};
  margin: 0 20px;
  padding: 0;
  max-width: 50%;
  max-height: 40%;
  flex-direction: column;
  overflow: scroll;
  max-height: 30%;
  flex-wrap: wrap;
  max-width: 100%;
  font-size: 18px;
  @media ${theme.media.tablet}{
    font-size: 20px;
    max-height: 40%;
  };
  @media ${theme.media.desktop}{
    font-size: 28px;
    display: flex;
    overflow: visible;
  }
`;

export const TechList = styled.ul`
  list-style-type: none;
  font-family: ${theme.fontFamily.primary};
  font-weight: 400;
  line-height: 2.4;
  flex-direction: row;
  flex: content;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  letter-spacing: 0.1em;
  color: ${theme.colours.brand.grey};
  margin: 0 20px;
  padding: 0;
  bottom: 0;
  max-width: 100%;
  font-size: 18px;
  max-height: 60px;
  @media ${theme.media.tablet}{
    font-size: 22px;
    max-height: none;
  };
  @media ${theme.media.desktop}{
    font-size: 28px;
  }
`;

export const ListItem = styled.div`
  max-width: 100%;
  font-family: ${theme.fontFamily.primary};
  font-size: 12px;
  text-indent: 16px;
  line-height: 1.4;
  display: flex;
  flex-direction: row;
  letter-spacing: 0.05em;
  font-weight: 300;
  height: max-content;
  margin-bottom: 16px;
  margin-left: 8px;
  @media ${theme.media.tablet}{
    font-size: 14px;
  };
  @media ${theme.media.desktop}{
    font-size: 18px;
  }
`;

export const TechListItem = styled.li`
  width: max-content;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  height: max-content;
  margin-bottom: 16px;
  margin-left: 8px;
`;

export const ListDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > em{
    color: ${theme.colours.brand.light};
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    @media ${theme.media.tablet}{
      font-size: 14px;
    };
    @media ${theme.media.desktop}{
      font-size: 16px;
    }
  }
`;

export const Icon = styled.div`
  background-image: ${ ({ image })  => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 40px;
  width: 40px;
  @media ${theme.media.tablet}{
    height: 50px;
    width: 50px;
  };
  @media ${theme.media.desktop}{
    height: 60px;
    width: 60px;
  }
`;
