// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// submodules
import NavigationBar from './NavigationBar.jsx';
import Step1_FileUpload from './Step1_FileUpload.jsx';
import Step2_SearchInfo from './Step2_SearchInfo.jsx';
import Step3_SelectTags from './Step3_SelectTags.jsx';

export default function EditWindow({ pageControlOnClick }) {
  const [step, setStep] = useState(2);
  let searchedData = [];

  let nextStepOnClick = () => {
    setStep(step+1);
  }

  let searchOnITunesAPI = (artist, title) => {
    let config = {}
    config.params = {
      term: `${artist.trim()} ${title.trim()}`
    }
    console.log(config);
    axios.get('/api/v1/search', config)
      .then((res) => {
        searchedData = res.data;
        console.log(searchedData);
        setStep(3);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <NavigationBar step={step} pageControlOnClick={pageControlOnClick} />
      <Step1_FileUpload step={step} setStep={setStep} />
      {(step > 1) ? <Step2_SearchInfo step={step} searchOnITunesAPI={searchOnITunesAPI} /> : ''}
      {(step > 2) ? <Step3_SelectTags step={step} searchedData={searchedData} /> : ''}
      {(step > 3) ? <div>Step 4</div> : ''}
    </div>
  );
}

EditWindow.propTypes = {
  pageControlOnClick: PropTypes.func
};
