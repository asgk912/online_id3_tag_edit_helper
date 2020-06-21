// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// submodules
import NavigationBar from './NavigationBar.jsx';
import Step1_FileUpload from './Step1_FileUpload.jsx';
import Step2_SearchInfo from './Step2_SearchInfo.jsx';
import Step3_SelectTags from './Step3_SelectTags.jsx';
import Step4_Download from './Step4_Download.jsx';
// css style related
import { StepsContainer } from './style.jsx';

export default function EditWindow({ pageControlOnClick }) {
  // Hook
  const [step, setStep] = useState(1);
  const [infoData, setInfoData] = useState([{title: undefined}]);


  // Event Listners

  // for Step 1: defined in step 1 submodule
 
  // for Step 2: send http request about search and sets infoData which will be passed down to step 3 
  let searchOnITunesAPI = (e, artist, title) => {
    if(title) {
      e.preventDefault();

      axios({
        url:'/api/v1/search',
        method: 'get',
        params: {term: `${artist.trim()} ${title.trim()}`}
      })
        .then((res) => {
          var temp = Array(res.data.length);

          for(var i=0; i<temp.length; i++) {
            temp[i] = {};

            // morph general info
            temp[i].artist = res.data[i].artistName;
            temp[i].album = res.data[i].collectionName;
            temp[i].title = res.data[i].trackName;
            temp[i].date = res.data[i].releaseDate.substring(0,10);
            temp[i].genre = res.data[i].primaryGenreName;
            temp[i].trackNumber = res.data[i].trackNumber + '/' + res.data[i].trackCount;
            temp[i].partOfSet = res.data[i].discNumber + '/' + res.data[i].discCount;

            // morph url related
            temp[i].artistViewUrl = res.data[i].artistViewUrl;
            temp[i].trackViewUrl = res.data[i].trackViewUrl;
            temp[i].image = res.data[i].artworkUrl100;
          }

          setInfoData(temp); // set infoData
          setStep(3); // go to step 3
        })
        .catch((e) => console.log(e));
      }
  };

  // for Step 3: send selected tag data to edit the id3 tag of uploade file
  let submitTagSelection = (selectedInfo) => {
    axios({
      url: '/api/v1/selection',
      method: 'post',
      data: selectedInfo
    })
      .then((res) => {
        setStep(4);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <NavigationBar step={step} pageControlOnClick={pageControlOnClick} />
      <StepsContainer>
        <Step1_FileUpload step={step} setStep={setStep} />
        {(step > 1) ? <Step2_SearchInfo step={step} searchOnITunesAPI={searchOnITunesAPI} /> : ''}
        {(step > 2) ? <Step3_SelectTags step={step} infoData={infoData} submitTagSelection={submitTagSelection}/> : ''}
        {(step > 3) ? <Step4_Download step={step} pageControlOnClick={pageControlOnClick} /> : ''}
      </StepsContainer>
    </div>
  );
}

EditWindow.propTypes = {
  pageControlOnClick: PropTypes.func
};