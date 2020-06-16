import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Button } from 'react-bootstrap';

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

          <Form.Row>
            <Button variant="outline-info" size="sm" onClick={()=>{searchOnITunesAPI(artist, title)}}>Search</Button>
          </Form.Row>
        
      </Form>
    </div>
  )
}

SearchForm.propTypes = {
  setStep: PropTypes.func,
  searchOnITunesAPI: PropTypes.func
};
