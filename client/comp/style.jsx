import styled from 'styled-components';

const themeColor = '#17A2B8';
const disabledColor = '#73c7d4';

/*
  Styles used over different submodules
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

export const SingleStepContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const SingleStepTitle = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 520;
`;

export const SingleStepSubTitle = styled.div`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 520;
`;

export const SingleStepContents = styled.div`
  margin-left: 18px;
`;

export const NextStepButtonContainer = styled.div`
  margin-top: 15px;
  text-align: right;
`;

export const NextStepButton = styled.button`
  width: 130px;
  border-width: 1px;
  border-radius: 3px;
  border-color: ${themeColor};
  color: ${themeColor};
  text-align: center;
  font-size: 14px;

  &:disabled {
    border-color: ${disabledColor};
    color: ${disabledColor};
  }

  &:hover:enabled {
    background-color: ${themeColor};
    color: #ffffff;
  }
`;

/*
  Welcome.jsx
*/
export const Title = styled.div`
  margin: 20px auto;
  text-align: center;
  font-size: 40px;
  font-weight: 520;
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
  StepWindow.jsx
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
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  padding-top: 12px;
  text-align: center;
  background-color: #dddddd;
`;

/*
  Step1_FileUpload.jsx
*/
export const InputFileContainer = styled.div`
  width: 100%;
  text-align: center;
`;

/*
  AccordianCard.jsx
*/
export const ThumbnailContainer = styled.div`
  width: 150px;
  height: 150px;
  padding: 5px;
  border-radius: 3px;
  border: 2px solid #dedede;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

/*
  Step4_DownloadFile.jsx
*/
export const RadioTip = styled.div`
  position: relative;
  left: 22px;
  font-weight: 520;
`;

export const LastStepButton = styled.button`
  width: 180px;
  height: 50px;
  border-width: 2px;
  border-radius: 3px;
  border-color: ${themeColor};
  color: ${themeColor};
  text-align: center;
  font-size: 20px;
  font-weight: 520;

  &:hover:enabled {
    background-color: ${themeColor};
    color: #ffffff;
  }
`;