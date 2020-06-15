// node packages
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// styled components
import { StepIcon } from './style.jsx';
//submodule
import SearchForm from './SearchForm.jsx';

export default function Step2_SearchInfo( {step, setStep, nextStepOnClick} ) {
  
  let iconTheme = (step === 2) ? "material-icons" : "material-icons-outlined";

  return (
    <div>
      <h5><StepIcon className={iconTheme} instList={true}>looks_two</StepIcon>Search Information</h5>
      <SearchForm setStep={setStep} nextStepOnClick={nextStepOnClick} />
    </div>
  );
}

Step2_SearchInfo.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  nextStepOnClick: PropTypes.func
}