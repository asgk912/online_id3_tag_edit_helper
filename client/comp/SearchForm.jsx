// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// css style related
import { Form, Col } from 'react-bootstrap';
import { SingleStepSubTitle, NextStepButtonContainer, NextStepButton } from './style.jsx';

export default function SearchForm({ searchOnITunesAPI }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  let handleOnChange = (e) => {
    if(e.target.id === 'title'){
      setTitle(e.target.value);
    } else {
      setArtist(e.target.value);
    }
  };

  return (
    <div>
      <SingleStepSubTitle>Search Song by Title (required) and Artist</SingleStepSubTitle>
      <Form id="searchForm">
          <Form.Row>
            <Col>
              <Form.Control required id='title' type="string" placeholder="Song Title" value={title} onChange={handleOnChange}/>
            </Col>
            <Col>
              <Form.Control id='artist' type="string" placeholder="Artist Name" value={artist} onChange={handleOnChange}/>
            </Col>
          </Form.Row>
      </Form>
      <NextStepButtonContainer>
        <NextStepButton form="searchForm" onClick={(e)=>{searchOnITunesAPI(e, artist, title)}}>Search</NextStepButton>
      </NextStepButtonContainer>
    </div>
  )
}

SearchForm.propTypes = {
  setStep: PropTypes.func,
  searchOnITunesAPI: PropTypes.func
};
