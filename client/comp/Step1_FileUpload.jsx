// node packages
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// css style related
import { StepIcon,
        SingleStepContainer,
        SingleStepTitle,
        SingleStepContents, 
        InputFileContainer,
        NextStepButtonContainer,
        NextStepButton } from './style.jsx';

export default function Step1_FileUpload( {step, uploadFileOnClick} ) {
  // Hook
  let [buttonDisabled, setButtonDisabled] = useState(true); // handles disabled attribute of button
  let fileInputRef = useRef(); // to reference file input type
  
  let iconTheme = (step === 1) ? "material-icons" : "material-icons-outlined";

  // if(step > 1) {
  //   setButtonDisabled(true);
  // }

  // event listner to disable/enable button
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
          <NextStepButton onClick={(e) => uploadFileOnClick(e, fileInputRef, setButtonDisabled, true)} disabled={buttonDisabled}>Upload File</NextStepButton>
        </NextStepButtonContainer>
      </SingleStepContents>
    </SingleStepContainer>
  )
}

Step1_FileUpload.propTypes = {
  step: PropTypes.number,
  uploadFileOnClick: PropTypes.func
}