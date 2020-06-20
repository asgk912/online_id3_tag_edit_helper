// node packages
import React from 'react';
import PropTypes from 'prop-types';
//submodule
import SearchForm from './SearchForm.jsx';
// css style related
import { StepIcon, SingleStepContainer } from './style.jsx';

export default function Step2_SearchInfo({ step, searchOnITunesAPI }) {
  
  let iconTheme = (step === 2) ? "material-icons" : "material-icons-outlined";

  return (
    <SingleStepContainer>
      <h5><StepIcon className={iconTheme} instList={true}>looks_two</StepIcon>Search Information</h5>
      <SearchForm searchOnITunesAPI={searchOnITunesAPI} />
    </SingleStepContainer>
  );
}

Step2_SearchInfo.propTypes = {
  step: PropTypes.number,
  searchOnITunesAPI: PropTypes.func
}