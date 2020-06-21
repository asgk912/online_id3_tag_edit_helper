// node packages
import React from 'react';
import PropTypes from 'prop-types';
// css style realated
import { Accordion, Row, Col, Card } from 'react-bootstrap';
import { ThumbnailContainer, Thumbnail, NextStepButtonContainer, NextStepButton} from './style.jsx';

export default function AccordianCard({ info, index, submitTagSelection }) {
  let selectedTags = {}
  selectedTags.artist = info.artist;
  selectedTags.title = info.title;

  let handleCBOnChange = (e) => {
    let targetValue = e.target.value
    if(selectedTags[targetValue] === undefined) {
      selectedTags[targetValue] = info[targetValue];
    } else {
      delete selectedTags[targetValue];
    }
  }

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={index}>
          <strong>Artist:</strong> {info.artist}<br/><strong>Album:</strong> {info.album}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <Row>
            <Col>
              <label><input type="checkbox" disabled checked/> <strong>Artist:</strong> <a target="_blank" rel="noreferrer noopener" href={info.artistViewUrl}>{info.artist}</a></label> <br/>
              <label><input type="checkbox" value="album" onChange={handleCBOnChange}/> <strong>Album:</strong> {info.album}</label> <br/>
              <label><input type="checkbox" disabled checked/> <strong>Title:</strong> <a target="_blank" rel="noreferrer noopener" href={info.trackViewUrl}>{info.title}</a></label> <br/>
              <label><input type="checkbox" value="year" onChange={handleCBOnChange}/> <strong>Release Date:</strong> {info.year}</label> <br/>
              <label><input type="checkbox" value="genre" onChange={handleCBOnChange}/> <strong>Genre:</strong> {info.genre}</label> <br/>
              <label><input type="checkbox" value="trackNumber" onChange={handleCBOnChange}/> <strong>Track Number:</strong> {info.trackNumber}</label> <br/>
              <label><input type="checkbox" value="partOfSet" onChange={handleCBOnChange}/> <strong>Disc Number:</strong> {info.partOfSet}</label>
            </Col>
            <Col xs={5}>
              <label><input type="checkbox" value="image" onChange={handleCBOnChange}/> <strong>Album Image:</strong></label> <br/>
              <ThumbnailContainer>
                <Thumbnail src={info.image}/>
              </ThumbnailContainer>
            </Col>
          </Row>
          <NextStepButtonContainer>
            <NextStepButton variant="outline-info" size="sm" onClick={()=> {submitTagSelection(selectedTags)}}>Submit Selection</NextStepButton>
          </NextStepButtonContainer>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

AccordianCard.propTypes = {
  info: PropTypes.object,
  index: PropTypes.number,
  submitTagSelection: PropTypes.func
}