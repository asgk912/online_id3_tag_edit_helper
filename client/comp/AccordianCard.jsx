// node packages
import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Row, Col, Card, Image, Button } from 'react-bootstrap';

export default function AccordianCard({ info, index, submitOnClick }) {
  let selectedInfo = {}
  selectedInfo.artist = info.artist;
  selectedInfo.title = info.title;

  let handleCBOnChange = (e) => {
    let targetValue = e.target.value
    if(selectedInfo[targetValue] === undefined) {
      selectedInfo[targetValue] = info[targetValue];
    } else {
      delete selectedInfo[targetValue];
    }
  }

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={index}>
          {info.album} <br/> by {info.artist} in {info.date.substring(0,4)}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <Row>
            <Col>
              <label><input type="checkbox" disabled checked/> Artist: {info.artist}</label> <br/>
              <label><input type="checkbox" value="album" onChange={handleCBOnChange}/> Album: {info.album}</label> <br/>
              <label><input type="checkbox" disabled checked/> Title: {info.title}</label>
              <label><input type="checkbox" value="date" onChange={handleCBOnChange}/> Release Date: {info.date}</label> <br/>
              <label><input type="checkbox" value="genre" onChange={handleCBOnChange}/> Genre: {info.genre}</label> <br/>
              <label><input type="checkbox" value="trackNumber" onChange={handleCBOnChange}/> Track Number: {info.trackNumber}</label> <br/>
              <label><input type="checkbox" value="partOfSet" onChange={handleCBOnChange}/> Disc Number: {info.partOfSet}</label>
            </Col>
            <Col>
              <label><input type="checkbox" value="image" onChange={handleCBOnChange}/> Album Image:</label> <br/>
              <Image src={info.image} thumbnail /> <br/><br/>
              <a target="_blank" rel="noreferrer noopener" href={info.artistViewUrl}>to artist page on iTunes</a> <br/>
              <a target="_blank" rel="noreferrer noopener" href={info.trackViewUrl}>to album and track page on iTunes</a> <br/>
            </Col>
          </Row>
          <Button variant="outline-info" size="sm" onClick={()=> {submitOnClick(selectedInfo)}}>Submit Selection</Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

AccordianCard.propTypes = {
  info: PropTypes.object,
  index: PropTypes.number,
  submitOnClick: PropTypes.func
}