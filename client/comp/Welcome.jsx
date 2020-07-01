// node packages
import React from 'react';
import PropTypes from 'prop-types';
// style
import { Title, MusicIcon, InfoContainer, WelcomeButtonContainer, WelcomeButton } from './style.jsx';

// React element
export default function Welcome({ pageControlOnClick }) {
  return (
    <>
      <Title><MusicIcon className="material-icons-outlined" fs="48px">library_music</MusicIcon> Online ID3 Tag Edit Helper</Title>
      <InfoContainer>
        <p>Welcome! This is an web application, which will help you edit ID3 tags of your audio file.</p>
        <ol>
          <li>Upload audio file you want edit</li>
          <li>Search song information</li>
            <ul>
              <li>by iTunes search API, or</li>
              <li><strike>by audio recognition API</strike> (currently not supported)</li>
            </ul>
          <li>Select tags you want to copy to the uploaded file</li>
          <li>Download updated version of audio file with your choice of filename</li>
        </ol>
        <WelcomeButtonContainer>
          <WelcomeButton id='welcome' onClick={pageControlOnClick}>Start</WelcomeButton>
        </WelcomeButtonContainer>
      </InfoContainer>
    </>
  );
}

Welcome.propTypes = {
  pageControlOnClick: PropTypes.func
};
