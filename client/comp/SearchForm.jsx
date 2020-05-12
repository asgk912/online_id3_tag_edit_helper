import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

export default function SearchForm({ searchOnApi }) {
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
      <br />
      <h4>Search Song by Title and Artist</h4>
      <Form>
        <Form.Group>
          <Form.Control id='artist' type="string" placeholder="Artist Name" value={artist} onChange={handleOnChange}/>
          <Form.Control id='title' type="string" placeholder="Song Title" value={title} onChange={handleOnChange} />
          <Button variant="outline-info" size="sm" onClick={()=>{searchOnApi(artist, title)}}>Search</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

SearchForm.propTypes = {
  searchOnApi: PropTypes.func
};
