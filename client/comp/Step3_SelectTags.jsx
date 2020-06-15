// node packages
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// styled components
import { StepIcon } from './style.jsx';

export default function Step3_SelectTags( {step, setStep, nextStepOnClick} ) {
  
  let iconTheme = (step === 3) ? "material-icons" : "material-icons-outlined";

  return (
    <div>
      <h5><StepIcon className={iconTheme} instList={true}>looks_3</StepIcon>Select Tags</h5>
    </div>
  );
}

Step3_SelectTags.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  nextStepOnClick: PropTypes.func
}