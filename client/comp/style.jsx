import styled from 'styled-components';

const themeColor = '#17A2B8';

/*
  Commonly Used Style
*/

export const MusicIcon = styled.span`
  ${props => props.fs === '48px' ? 
    `font-size: 48px;
      position: relative;
      top: 10px;` :
    `font-size: 36px;
      position: absolute;
      left: 20px;
      top: 10px;`
  }
  color: ${themeColor};
`;

export const StepIcon = styled.span`
  ${props => props.instList ? `position: relative;
                              top: 10px;` : ''}
  font-size: 36px;
  color: ${themeColor};
`;

/*
  Welcome.jsx
*/
export const Title = styled.div`
  margin: 20px auto;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

export const InfoContainer = styled.div`
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  border: 3px solid ${themeColor};
  padding: 10px 15px;
  border-radius: 8px;
`;

export const WelcomeButtonContainer = styled.div`
  margin: 30px auto 5px auto;
  width: 100%;
  text-align: center;
`;

export const WelcomeButton = styled.button`
  margin: auto;
  width: 65%;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${themeColor};
  color: ${themeColor};
  text-align: center;

  &:hover {
    background-color: ${themeColor};
    color: #ffffff;
  }
`;

/*
  EditWindow.jsx
*/
export const StepsContainer = styled.div`
  box-sizing: border-box;
  width: 600px;
  margin: auto;
`;

/*
  NavigationBar.jsx
*/
export const NavBar = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding-top: 12px;
  text-align: center;
  background-color: #dddddd;
`;

