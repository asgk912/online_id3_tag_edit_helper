// node packages
import React from 'react';
import PropTypes from 'prop-types';
// style
import { Title, InfoContainer, MethodContainer } from './style.jsx';

export default function Welcome({ pageControlOnClick }) {
  return (
    <div>
      <Title> <i className='far fa-file-audio' style={{color: 'lightBlue'}}/> Online ID3 Tag Edit Helper</Title>
      <InfoContainer>
        <p>Welcome! This is an web application, which will help you edit ID3 tags of your music file by either of two methods:</p>
        <MethodContainer className='recognition' onClick={pageControlOnClick}>
          <h6>Audoio Recognition</h6>
          <div>This method is <u>recommended if you do not know artist or song title.</u> You simply upload the music file to the app, and then the app will search artist and song title through audio recognition API and featch relavent data from music search API. At the end, you will redownload the previously uploaded music file but with new ID3 tags.</div>
        </MethodContainer>
        <br/>
        <MethodContainer className='onlineSearch' onClick={pageControlOnClick}>
          <h6>Online Search</h6>
          <div>This method is <u>recommended if you know both artist and song title.</u> You will search by artist and song title, and the app will fetch ID3 tags of relavent songs. At the end, you have two choices: 1) upload your music file and donwload the same music file with new ID3 tags or 2) download small audio file with ID3 tags you want and use Mp3tag, Tag Edittor, or other relavent softwares to copy and paste ID3 tags to your target music file.</div>
        </MethodContainer>
      </InfoContainer>
    </div>
  );
}

Welcome.propTypes = {
  pageControlOnClick: PropTypes.func
};
