// node packages
import React from 'react';
import PropTypes from 'prop-types';
// style
import { Title, Info } from './style.jsx';

export default function Welcome({ pageControlOnClick }) {
  return (
    <div>
      <Title> <i className='far fa-file-audio'/> Online ID3 Tag Edit Helper</Title>
      <Info>
        <div className='recognition' onClick={pageControlOnClick}>
          Audoio Recognition Method
        </div>
        <div className='onlineSearch' onClick={pageControlOnClick}>
          Online Search Method
        </div>
      </Info>
    </div>
  );
}

Welcome.propTypes = {
  pageControlOnClick: PropTypes.func
};
