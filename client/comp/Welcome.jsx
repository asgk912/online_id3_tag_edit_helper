// node packages
import React from 'react';
import PropTypes from 'prop-types';
// style
import { Title, ColoredIcon, InfoContainer, WelcomeButtonContainer, WelcomeButton } from './style.jsx';

// React element
export default function Welcome({ pageControlOnClick }) {
  return (
    <div>
      <Title><ColoredIcon className="material-icons-outlined" style={{fontSize: '48px'}}>library_music</ColoredIcon> Online ID3 Tag Edit Helper</Title>
      <InfoContainer>
        <p>Welcome! This is an web application, which will help you edit ID3 tags of your audio file.</p>
        <ol>
          <li>Upload audio file you want edit</li>
          <li>Search song information</li>
            <ul>
              <li>by iTunes search API, or</li>
              <li>by audio recognition API (there is a limit on the number of use)</li>
            </ul>
          <li>Select information you want to copy to the uploaded file</li>
          <li>Download update version of audio file</li>
        </ol>
        <WelcomeButtonContainer>
          <WelcomeButton id='welcome' onClick={pageControlOnClick}>Start</WelcomeButton>
        </WelcomeButtonContainer>
      </InfoContainer>
    </div>
  );
}

Welcome.propTypes = {
  pageControlOnClick: PropTypes.func
};
