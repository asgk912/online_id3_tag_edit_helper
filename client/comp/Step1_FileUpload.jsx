// node packages
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
// styled components
import { StepIcon } from './style.jsx';

export default function Step1_FileUpload() {
  return (
    <div>
      <h5><StepIcon className="material-icons">looks_one</StepIcon>Upload audio file you want edit</h5>
      <Form>
        <Form.Group controlId="audioFilePath">
          <Form.Control type="file" accept="audio/*" />
        </Form.Group>
        <Button variant="outline-info" size="sm">Upload File</Button>
      </Form>
    </div>
  )
}
// const ChooseFile = React.forwardRef(
//   function cf({uploadFileOnClick}, ref) {
//     return (
//       <div>
//         <h4>Choose an audio file to edit tags</h4>
//         <Form>
//           <Form.Group controlId="audioFilePath">
//             <Form.Control ref={ref} type="file" accept="audio/*" />
//           </Form.Group>
//           <Button variant="outline-info" size="sm" onClick={uploadFileOnClick}>Upload File</Button>
//         </Form>
//       </div>
//     )
//   }
// );

// ChooseFile.propTypes = {
//   uploadFileOnClick: PropTypes.func
// }