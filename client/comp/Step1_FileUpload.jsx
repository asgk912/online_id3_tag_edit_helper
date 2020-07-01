// node packages
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// css style related
import { StepIcon,
        SingleStepContainer,
        SingleStepTitle,
        SingleStepContents, 
        SingleStepSubTitle, 
        InputFileContainer,
        NextStepButtonContainer,
        NextStepButton } from './style.jsx';

export default function Step1_FileUpload( { forwardRef, step, uploadFileOnClick} ) {
  // Hook
  let [buttonDisabled, setButtonDisabled] = useState(true); // handles disabled attribute of button
  let fileInputRef = useRef(); // to reference file input
  
  let iconTheme = (step === 1) ? "material-icons" : "material-icons-outlined";

  // event listner to enable/disable button
  let enableButtonOnChange = (e) => {
    if(e.type === 'change' && fileInputRef.current.files.length === 1) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }
 
  return (
    <SingleStepContainer ref={forwardRef}>
      <SingleStepTitle><StepIcon className={iconTheme} instList={true}>looks_one</StepIcon>Upload audio file you want edit</SingleStepTitle>
      <SingleStepContents>
        <SingleStepSubTitle>The file size has to be less than 12 MB</SingleStepSubTitle>
        <InputFileContainer>
          <input ref={fileInputRef} type="file" accept="audio/*" onChange={enableButtonOnChange}/>
        </InputFileContainer>

        <NextStepButtonContainer>
          <NextStepButton onClick={(e) => uploadFileOnClick(e, fileInputRef, enableButtonOnChange)} disabled={buttonDisabled}>Upload File</NextStepButton>
        </NextStepButtonContainer>
      </SingleStepContents>
    </SingleStepContainer>
  )
}

Step1_FileUpload.propTypes = {
  forwardRef: PropTypes.object,
  step: PropTypes.number,
  uploadFileOnClick: PropTypes.func
}