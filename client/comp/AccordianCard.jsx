// node packages
import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Row, Col, Card, Form, Image } from 'react-bootstrap';

export default function AccordianCard({ info, index }) {
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
              <Form.Check type="checkbox" disabled checked label={"Artist: " + info.artist} />
              <Form.Check type="checkbox" label={"Album: " + info.album} />
              <Form.Check type="checkbox" disabled checked label={"Title: " + info.title} />
              <Form.Check type="checkbox" label={"Release Date: " + info.date} />
              <Form.Check type="checkbox" label={"Genre: " + info.genre} />
              <Form.Check type="checkbox" label={"Track Number: " + info.trackNumber} />
              <Form.Check type="checkbox" label={"Disc Number: " + info.partOfSet} />
            </Col>
            <Col>
              <Image src={info.image} thumbnail /> <br/>
              <a target="_blank" rel="noreferrer noopener" href={info.artistViewUrl}>to artist page on iTunes</a> <br/>
              <a target="_blank" rel="noreferrer noopener" href={info.trackViewUrl}>to album and track page on iTunes</a>
            </Col>
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

AccordianCard.propTypes = {
  info: PropTypes.object,
  index: PropTypes.number
}