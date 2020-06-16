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
  let searchedData = null;

  // let nextStepOnClick = () => {
  //   setStep(step+1);
  // }

  let searchOnITunesAPI = (artist, title) => {
    let config = {}
    config.params = {
      term: `${artist.trim()} ${title.trim()}`
    }
    axios.get('/api/v1/search', config)
      .then((res) => {
        searchedData = Array(res.data.length);

        for(var i=0; i<searchedData.length; i++) {
          searchedData[i] = {};

          // general info
          searchedData[i].artist = res.data[i].artistName;
          searchedData[i].album = res.data[i].collectionName;
          searchedData[i].title = res.data[i].trackName;
          searchedData[i].date = res.data[i].releaseDate;
          searchedData[i].genre = res.data[i].primaryGenreName;
          searchedData[i].trackNumber = res.data[i].trackNumber + '/' + res.data[i].trackCount;
          searchedData[i].partOfSet = res.data[i].discNumber + '/' + res.data[i].discCount;

          // url related
          searchedData[i].artistViewUrl = res.data[i].artistViewUrl;
          searchedData[i].trackViewUrl = res.data[i].trackViewUrl;
          searchedData[i].image = res.data[i].artworkUrl100;
        }

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