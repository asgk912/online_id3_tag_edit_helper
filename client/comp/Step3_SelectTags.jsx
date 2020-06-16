// node packages
import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Row, Col, Card, Form, Image, ButtonGroup, Button } from 'react-bootstrap';
// styled components
import { StepIcon } from './style.jsx';
// submodule
import AccordianCard from './AccordianCard.jsx';

export default function Step3_SelectTags({ step, infoData }) {
  let iconTheme = (step === 3) ? "material-icons" : "material-icons-outlined";
  
  // let accArray = Array(infoData.length);

  // for(let i=0; i<infoData.length; i++) {
  //   accArray[i] = <AccordianCard key={i} info={accArray[i]} index={i}/>
  // }

  return (
    <div>
      <h5><StepIcon className={iconTheme} instList={true}>looks_3</StepIcon>Select Tags</h5>
      <Accordion>
        {infoData.map((info, index) => <AccordianCard key={index} info={info} index={index}/>)}
      </Accordion>
    </div>
  );
}

Step3_SelectTags.propTypes = {
  step: PropTypes.number,
  infoData: PropTypes.array
}