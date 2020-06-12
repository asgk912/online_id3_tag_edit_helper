import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const ChooseFile = React.forwardRef(
  function cf({uploadFileOnClick}, ref) {
    return (
      <div>
        <h4>Choose an audio file to edit tags</h4>
        <Form>
          <Form.Group controlId="audioFilePath">
            <Form.Control ref={ref} type="file" accept="audio/*" />
          </Form.Group>
          <Button variant="outline-info" size="sm" onClick={uploadFileOnClick}>Upload File</Button>
        </Form>
      </div>
    )
  }
);

ChooseFile.propTypes = {
  uploadFileOnClick: PropTypes.func
}

export default ChooseFile;