import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function SearchForm({ setStep, nextStepOnClick }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  let handleOnChange = (e) => {
    if(e.target.id === 'title'){
      setTitle(e.target.value);
    } else {
      setArtist(e.target.value);
    }
  };

  let searchOnAPI = (artist, title) => {
    let config = {}
    config.params = {
      term: `${artist.trim()} ${title.trim()}`
    }
    axios.get('/api/v1/search', config)
      .then((res) => {
        console.log(res.data);
        setStep(3);
      })
      .catch((e) => console.log(e));
  };

  let onEnterPressed = (e) => {
    if (e.key === 'Enter' && artist && title) {
      searchOnAPI(artist, title);
    }
  }

  return (
    <div>
      <h6>Search Song by Title and Artist</h6>
      <Form>
        <Form.Group>
          <Form.Control id='artist' type="string" placeholder="Artist Name" required value={artist} onChange={handleOnChange} onKeyPress={onEnterPressed}/>
          <Form.Control id='title' type="string" placeholder="Song Title" required value={title} onChange={handleOnChange} onKeyPress={onEnterPressed}/>
          <Button variant="outline-info" size="sm" onClick={()=>{searchOnAPI(artist, title)}}>Search</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

SearchForm.propTypes = {
  setStep: PropTypes.func,
  nextStepOnClick: PropTypes.func
};
