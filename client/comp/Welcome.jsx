// node packages
import React from 'react';
import PropTypes from 'prop-types';
// style
import { AppIcon, Title, InfoContainer, WelcomeButtonContainer, WelcomeButton } from './style.jsx';

// React element
export default function Welcome({ stepControlOnClick }) {
  return (
    <div>
      <Title><AppIcon className='far fa-file-audio'/> Online ID3 Tag Edit Helper</Title>
      <InfoContainer>
        <p>Welcome! This is an web application, which will help you edit ID3 tags of your audio file.</p>
        <ol>
          <li>Upload audio file which ID3 tag you want edit</li>
          <li>Search song information</li>
            <ul>
              <li>by iTunes search API, or</li>
              <li>by audio recognition API (there is a limit on the number of use)</li>
            </ul>
          <li>Select information you want to copy to the uploaded file</li>
          <li>Download update version of audio file</li>
        </ol>
        <WelcomeButtonContainer>
          <WelcomeButton id='welcome' onClick={stepControlOnClick}>Start</WelcomeButton>
        </WelcomeButtonContainer>
      </InfoContainer>
    </div>
  );
}

Welcome.propTypes = {
  stepControlOnClick: PropTypes.func
};
