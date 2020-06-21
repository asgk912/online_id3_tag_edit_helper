// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// css style related
import { SingleStepContainer,
        SingleStepTitle,
        SingleStepSubTitle,
        StepIcon,
        SingleStepContents,
        LastStepButton } from './style.jsx';

export default function Step4_Download({ step, dlOption, downloadOnClick }) {
  // hook
  const [customName, setCustomName] = useState('');
  const [radioStatus, setRadioStatus] = useState([false, true, false]);
  const [fileName, setFileName] = useState(dlOption.artistTitle)

  let iconTheme = (step === 4) ? "material-icons" : "material-icons-outlined";
  

  // event listners
  let handleRadioOnEvents = (e) => { 
    switch(e.target.className){
      case 'radio-original':
        setFileName(dlOption.original);
        setRadioStatus([true, false, false]);
        break;
      case 'radio-artistTitle':
        setFileName(dlOption.artistTitle);
        setRadioStatus([false, true, false]);
        break;
      case 'radio-customName':
        setFileName(customName);
        setRadioStatus([false, false, true]);
        break;
      default:
        setFileName(dlOption.artistTitle);
        setRadioStatus([false, true, false]);
    }
  };

  let handleTextInputOnChange = (e) => {
    var temp = e.target.value;
    
    setCustomName(temp);
    setFileName(temp + dlOption.extension);

    if(!radioStatus[2]) {
      setRadioStatus([false, false, true]);
    }
    
  };

  return (
    <SingleStepContainer>
      <SingleStepTitle><StepIcon className={iconTheme} instList={true}>looks_4</StepIcon>Download File</SingleStepTitle>
      <SingleStepContents>
        <SingleStepSubTitle>Choose file name you want download with:</SingleStepSubTitle>
        <form id="radio-fileName">
          <div>
            <input className="radio-original" type="radio" name="dlOption" value="original" checked={radioStatus[0]} onChange={handleRadioOnEvents}/>
            <span className="radio-original" onClick={handleRadioOnEvents}>&nbsp; original file name:</span><br/>
            <div className="radio-original" onClick={handleRadioOnEvents}>{dlOption.original}</div>
          </div>

          <div>
            <input className="radio-artistTitle" type="radio" name="dlOption" value="artistTitle" checked={radioStatus[1]} onChange={handleRadioOnEvents}/>
            <span className="radio-artistTitle" onClick={handleRadioOnEvents}>&nbsp; (artist) - (title).(ext.):</span><br/>
            <div className="radio-artistTitle" onClick={handleRadioOnEvents}>{dlOption.artistTitle}</div>
          </div>

          <div>
            <input className="radio-customName" type="radio" name="dlOption" value="customName" checked={radioStatus[2]} onChange={handleRadioOnEvents}/>
            <span className="radio-customName" onClick={handleRadioOnEvents}>&nbsp; custom name:</span><br/>
            <input className="radio-customName" type="text" required={radioStatus[2]} maxLength="40" size="40" value={customName} onChange={handleTextInputOnChange}/>
            <span className="radio-customName">{dlOption.extension}</span>
          </div>
        </form>
      </SingleStepContents>
      <div style={{textAlign: "center", marginTop: "30px"}}>
        <LastStepButton form="radio-fileName" onClick={(e) => downloadOnClick(e, fileName)}>Download File</LastStepButton>
      </div>
    </SingleStepContainer>
  );
}

Step4_Download.propTypes = {
  step: PropTypes.number,
  dlOption: PropTypes.object,
  downloadOnClick: PropTypes.func
}