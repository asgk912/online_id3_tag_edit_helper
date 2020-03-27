import styled from 'styled-components';

/*
  Welcome.jsx
*/
export const Title = styled.h1`
  text-align: center;
  margin: 20px auto;
`;

export const InfoContainer = styled.div`
  width: 800px;
  height: 400px;
  margin: auto;
  border: 3px solid lightblue;
  padding: 10px 15px;
  border-radius: 8px;
`;

export const MethodContainer = styled.div`
  &: hover {
    color: lightblue;
    text-decoration: underline;
  }
`;