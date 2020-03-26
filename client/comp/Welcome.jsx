import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ pageControlOnClick }) => {
  return (
    <div>
      <div className='recognition' onClick={pageControlOnClick}>
        Audoio Recognition Method
      </div>
      <div className='onlineSearch' onClick={pageControlOnClick}>
        Online Search Method
      </div>
    </div>
  );
}

Welcome.propTypes = {
  pageControlOnClick: PropTypes.func
};

export default Welcome;
