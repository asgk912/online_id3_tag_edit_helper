// node packages
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Row, Col, Card, Form, Image, ButtonGroup, Button } from 'react-bootstrap';
// styled components
import { StepIcon } from './style.jsx';

export default function Step3_SelectTags({ step, infoData }) {
  let iconTheme = (step === 3) ? "material-icons" : "material-icons-outlined";
  
  let accArray = Array(infoData.length);

  for(let i=0; i<infoData.length; i++) {
    accArray[i] = (
      <Card key={i}>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey={i}>
            {infoData[i].album} by {infoData[i].artist} in {infoData[i].date.substring(0,4)}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={i}>
          <Card.Body>
            <Row>
              <Col>
                <Form.Check type="checkbox" disabled checked label={"Artist: " + infoData[i].artist} />
                <Form.Check type="checkbox" label={"Album: " + infoData[i].album} />
                <Form.Check type="checkbox" disabled checked label={"Title: " + infoData[i].title} />
                <Form.Check type="checkbox" label={"Release Date: " + infoData[i].date} />
                <Form.Check type="checkbox" label={"Genre: " + infoData[i].genre} />
                <Form.Check type="checkbox" label={"Track Number: " + infoData[i].trackNumber} />
                <Form.Check type="checkbox" label={"Disc Number: " + infoData[i].partOfSet} />
              </Col>
              <Col>
                <Image src={infoData[i].image} thumbnail /> <br/>
                <a target="_blank" rel="noreferrer noopener" href={infoData[i].artistViewUrl}>to artist page on iTunes</a> <br/>
                <a target="_blank" rel="noreferrer noopener" href={infoData[i].trackViewUrl}>to album and track page on iTunes</a>
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }

  return (
    <div>
      <h5><StepIcon className={iconTheme} instList={true}>looks_3</StepIcon>Select Tags</h5>
      <Accordion>
        {accArray}
      </Accordion>
    </div>
  );
}

Step3_SelectTags.propTypes = {
  step: PropTypes.number,
  infoData: PropTypes.array
}