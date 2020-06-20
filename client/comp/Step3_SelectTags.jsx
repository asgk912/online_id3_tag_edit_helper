// node packages
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// submodule
import AccordianCard from './AccordianCard.jsx';
// css style realated
import { Accordion } from 'react-bootstrap';
import { StepIcon,
        SingleStepContainer,
        SingleStepTitle } from './style.jsx';

export default function Step3_SelectTags({ step, setStep, infoData }) {
  let iconTheme = (step === 3) ? "material-icons" : "material-icons-outlined";

  let submitOnClick = (selectedInfo) => {
    axios.post('/api/v1/selection', selectedInfo)
      .then(() => {
        setStep(4);
      })
      .catch((e) => console.log(e));
  }

  return (
    <SingleStepContainer>
      <SingleStepTitle><StepIcon className={iconTheme} instList={true}>looks_3</StepIcon>Select Tags</SingleStepTitle>
      <div style={{height: '500px', overflowY: 'auto'}}>
        <Accordion>
          {infoData.map((info, index) => <AccordianCard key={index} info={info} index={index} submitOnClick={submitOnClick}/>)}
        </Accordion>
      </div>
    </SingleStepContainer>
  );
}

Step3_SelectTags.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  infoData: PropTypes.array
}