// node packages
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// css style related
import { Form, Button } from 'react-bootstrap';
import { StepIcon } from './style.jsx';

export default function Step1_FileUpload( {step, setStep} ) {
  let [buttonDisabled, setButtonDisabled ] = useState(true);
  let fileInputRef = useRef()
  
  let iconTheme = (step === 1) ? "material-icons" : "material-icons-outlined";

  let uploadFileOnClick = () => {
    let data = new FormData();
    data.append('audio', fileInputRef.current.files[0]);

    axios.post('/api/v1/file', data, {
      header: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(() => {
        setStep(2);
        setButtonDisabled(true);
      })
      .catch((e) => {
        console.log(e);
      }); 
  }

  let enableButtonOnChange = () => {
    setButtonDisabled(false)
  }
 
  return (
    <div>
      <h5><StepIcon className={iconTheme} instList={true}>looks_one</StepIcon>Upload audio file you want edit</h5>
      <Form>
        <Form.Group controlId="audioFilePath">
          <Form.Control ref={fileInputRef} type="file" accept="audio/*" onChange={enableButtonOnChange}/>
        </Form.Group>
        <Button variant="outline-info" size="sm" onClick={uploadFileOnClick} disabled={buttonDisabled}>Upload File</Button>
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

Step1_FileUpload.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func
}