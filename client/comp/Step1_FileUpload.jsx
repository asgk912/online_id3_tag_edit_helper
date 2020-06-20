// node packages
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// css style related
import { StepIcon,
        SingleStepContainer,
        SingleStepTitle,
        SingleStepContents, 
        InputFileContainer,
        NextStepButtonContainer,
        NextStepButton } from './style.jsx';

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
    if(fileInputRef.current.files.length === 1) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true);
    }
    
  }
 
  return (
    <SingleStepContainer>
      <SingleStepTitle><StepIcon className={iconTheme} instList={true}>looks_one</StepIcon>Upload audio file you want edit</SingleStepTitle>
      <SingleStepContents>
        <InputFileContainer>
          <input ref={fileInputRef} type="file" accept="audio/*" onChange={enableButtonOnChange}/>
        </InputFileContainer>
        <NextStepButtonContainer>
          <NextStepButton onClick={uploadFileOnClick} disabled={buttonDisabled}>Upload File</NextStepButton>
        </NextStepButtonContainer>
      </SingleStepContents>
    </SingleStepContainer>
  )
}

Step1_FileUpload.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func
}