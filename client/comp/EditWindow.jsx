// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// submodules
import NavigationBar from './NavigationBar.jsx';
import Step1_FileUpload from './Step1_FileUpload.jsx';
import Step2_SearchInfo from './Step2_SearchInfo.jsx';
import Step3_SelectTags from './Step3_SelectTags.jsx';

export default function EditWindow({ pageControlOnClick }) {
  const [step, setStep] = useState(2);

  let nextStepOnClick = () => {
    setStep(step+1);
  }

  return (
    <div>
      <NavigationBar step={step} pageControlOnClick={pageControlOnClick} />
      <Step1_FileUpload step={step} setStep={setStep} />
      {(step > 1) ? <Step2_SearchInfo step={step} setStep={setStep} nextStepOnClick={nextStepOnClick} /> : ''}
      {(step > 2) ? <Step3_SelectTags step={step} setStep={setStep} nextStepOnClick={nextStepOnClick} /> : ''}
      {(step > 3) ? <div>Step 4</div> : ''}
    </div>
  );
}

EditWindow.propTypes = {
  pageControlOnClick: PropTypes.func
};
