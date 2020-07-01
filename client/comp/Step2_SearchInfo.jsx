// node packages
import React from 'react';
import PropTypes from 'prop-types';
//submodule
import SearchForm from './SearchForm.jsx';
// css style related
import { StepIcon,
        SingleStepContainer,
        SingleStepTitle, 
        SingleStepContents} from './style.jsx';

export default function Step2_SearchInfo({ forwardRef, step, searchOnITunesAPI }) {
  
  let iconTheme = (step === 2) ? "material-icons" : "material-icons-outlined";

  return (
    <SingleStepContainer id="step2" ref={forwardRef}>
      <SingleStepTitle><StepIcon className={iconTheme} instList={true}>looks_two</StepIcon>Search Song Information</SingleStepTitle>
      <SingleStepContents>
        <SearchForm searchOnITunesAPI={searchOnITunesAPI} />
      </SingleStepContents>
    </SingleStepContainer>
  );
}

Step2_SearchInfo.propTypes = {
  forwardRef: PropTypes.object,
  step: PropTypes.number,
  searchOnITunesAPI: PropTypes.func
}