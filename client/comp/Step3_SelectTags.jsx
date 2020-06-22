// node packages
import React from 'react';
import PropTypes from 'prop-types';
// submodule
import AccordianCard from './AccordianCard.jsx';
// css style realated
import { Accordion } from 'react-bootstrap';
import { StepIcon,
        SingleStepContainer,
        SingleStepTitle } from './style.jsx';

export default function Step3_SelectTags({ forwardRef, step, submitTagSelection, infoData }) {
  let iconTheme = (step === 3) ? "material-icons" : "material-icons-outlined";

  return (
    <SingleStepContainer ref={forwardRef}>
      <SingleStepTitle><StepIcon className={iconTheme} instList={true}>looks_3</StepIcon>Select Tags</SingleStepTitle>
      <div style={{height: '420px', overflowY: 'auto'}}>
        <Accordion defaultActiveKey={0}>
          {infoData.map((info, index) => <AccordianCard key={index} info={info} index={index} submitTagSelection={submitTagSelection}/>)}
        </Accordion>
      </div>
    </SingleStepContainer>
  );
}

Step3_SelectTags.propTypes = {
  forwardRef: PropTypes.object,
  step: PropTypes.number,
  submitTagSelection: PropTypes.func,
  infoData: PropTypes.array
}