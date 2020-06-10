import styled from 'styled-components';

const universalColor = '#17A2B8';

export const AppIcon = styled.i`
  color: ${universalColor};
`
/*
  Welcome.jsx
*/
export const Title = styled.h1`
  margin: 20px auto;
  text-align: center;
`;

export const InfoContainer = styled.div`
  width: 800px;
  margin: auto;
  border: 3px solid ${universalColor};
  padding: 10px 15px;
  border-radius: 8px;
`;

export const WelcomeButtonContainer = styled.div`
  margin: 30px auto 5px auto;
  width: 100%;
  text-align: center;
`;

export const WelcomeButton = styled.button`
  text-align: center;
  margin: auto;
  width: 65%;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${universalColor};
  color: ${universalColor};

  &:hover {
    background-color: ${universalColor};
    color: #ffffff;
  }
`;