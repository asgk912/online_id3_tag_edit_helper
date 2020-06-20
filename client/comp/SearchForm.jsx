// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// css style related
import { Form, Col } from 'react-bootstrap';
import { NextStepButtonContainer, NextStepButton } from './style.jsx';

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

  let onEnterPressed = (e) => {
    if (e.key === 'Enter' && artist && title) {
      searchOnITunesAPI(artist, title);
    }
  }

  return (
    <div>
      <h6>Search Song by Title and Artist</h6>
      <Form>
          <Form.Row>
            <Col>
              <Form.Control required id='title' type="string" placeholder="Song Title" value={title} onChange={handleOnChange} onKeyPress={onEnterPressed}/>
            </Col>
            <Col>
              <Form.Control id='artist' type="string" placeholder="Artist Name" value={artist} onChange={handleOnChange} onKeyPress={onEnterPressed}/>
            </Col>
          </Form.Row>
      </Form>
      <NextStepButtonContainer>
        <NextStepButton onClick={()=>{searchOnITunesAPI(artist, title)}}>Search</NextStepButton>
      </NextStepButtonContainer>
    </div>
  )
}

SearchForm.propTypes = {
  setStep: PropTypes.func,
  searchOnITunesAPI: PropTypes.func
};
