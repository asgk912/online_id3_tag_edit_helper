// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// submodules
import NavigationBar from './NavigationBar.jsx';
import Step1_FileUpload from './Step1_FileUpload.jsx';

export default function EditWindow({ pageControlOnClick }) {
  const [step, setStep] = useState(2);

  return (
    <div>
      <NavigationBar step={step} pageControlOnClick={pageControlOnClick} />
      <Step1_FileUpload />
      {(step >= 2) ? <div>Step 2</div> : ''}
      {(step >= 3) ? <div>Step 3</div> : ''}
      {(step >= 4) ? <div>Step 4</div> : ''}
    </div>
  );
}

EditWindow.propTypes = {
  pageControlOnClick: PropTypes.func
};
