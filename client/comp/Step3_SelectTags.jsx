// node packages
import React from 'react';
import PropTypes from 'prop-types';
// submodule
import AccordianCard from './AccordianCard.jsx';
// css style realated
import { Accordion } from 'react-bootstrap';
import { StepIcon,
        SingleStepContainer,
        SingleStepTitle,
        SingleStepContents,
        SingleStepSubTitle } from './style.jsx';

export default function Step3_SelectTags({ forwardRef, step, submitTagSelection, infoData }) {
  let iconTheme = (step === 3) ? "material-icons" : "material-icons-outlined";

  return (
    <SingleStepContainer id="step3" ref={forwardRef}>
      <SingleStepTitle><StepIcon className={iconTheme} instList={true}>looks_3</StepIcon>Select Tags</SingleStepTitle>
      <SingleStepContents>
        <SingleStepSubTitle>Choose tags within the same card and click the submit button</SingleStepSubTitle>
        <SingleStepSubTitle>You can click artist or title, and iTunes web page will open on new tab</SingleStepSubTitle>
      </SingleStepContents>
      
      <Accordion defaultActiveKey={0} style={{height: '420px', overflowY: 'auto'}}>
        {infoData.map((info, index) => <AccordianCard key={index} info={info} index={index} submitTagSelection={submitTagSelection}/>)}
      </Accordion>
    </SingleStepContainer>
  );
}

Step3_SelectTags.propTypes = {
  forwardRef: PropTypes.object,
  step: PropTypes.number,
  submitTagSelection: PropTypes.func,
  infoData: PropTypes.array
}