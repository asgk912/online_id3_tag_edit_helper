// node packages
import React, { useState, useRef } from 'react';
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

export default function StepWindow({ pageControlOnClick }) {
  // Hook
  const [step, setStep] = useState(1);
  const [infoData, setInfoData] = useState([{title: undefined}]);
  const [dlOption, setDLOption] = useState({original: 'original.mp3', artistTitle: '(artist) - (title).mp3', extension: '.mp3'});

  /*
    Event Listners about http request
  */
  // for Step 1: upload file to server
  let uploadFileOnClick = (e, fileInputRef, cb, cbIn) => {
    e.preventDefault();

    // set form data
    let data = new FormData();
    data.append('audio', fileInputRef.current.files[0]);

    // post request with axios
    axios.post('/api/v1/file', data, {
      header: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(() => {
        setStep(2); // go to next step
        cb(cbIn);   // callback function will disable the button
      })
      .catch((err) => console.log(err)); 
  }
 
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
          let morphed = Array(res.data.length);

          for(var i=0; i<morphed.length; i++) {
            morphed[i] = {};

            // morph general info
            morphed[i].artist = res.data[i].artistName;
            morphed[i].album = res.data[i].collectionName;
            morphed[i].title = res.data[i].trackName;
            morphed[i].year = res.data[i].releaseDate.substring(0,10);
            morphed[i].genre = res.data[i].primaryGenreName;
            morphed[i].trackNumber = res.data[i].trackNumber + '/' + res.data[i].trackCount;
            morphed[i].partOfSet = res.data[i].discNumber + '/' + res.data[i].discCount;

            // morph url related
            morphed[i].artistViewUrl = res.data[i].artistViewUrl;
            morphed[i].trackViewUrl = res.data[i].trackViewUrl;
            morphed[i].image = res.data[i].artworkUrl100;
          }

          setInfoData(morphed); // set infoData
          setStep(3); // go to step 3
        })
        .catch((err) => console.log(err));
      }
  };

  // for Step 3: send selected tag data to edit the id3 tag of uploade file
  let submitTagSelection = (selectedInfo) => {
    axios({
      url: '/api/v1/selection',
      method: 'post',
      data: selectedInfo
    })
      .then(({ data }) => {
        let extension = data.original.substring(data.original.length - 4)
        let option = {
          original: data.original,
          artistTitle: data.artist + ' - ' + data.title + extension,
          extension: extension
        }
        setDLOption(option)
        setStep(4);
      })
      .catch((err) => console.log(err));
  }

  // for step 4: modify filename and download file
  let downloadOnClick = (e, fileName) => {
    if(fileName){
      e.preventDefault();

      axios({ // first send updated filename
        url: '/api/v1/fileName',
        method: 'post',
        data: { fileName }
      })
        .then(()=> window.open('/api/v1/file')) // download file
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <NavigationBar step={step} pageControlOnClick={pageControlOnClick} />
      <StepsContainer>
        <Step1_FileUpload step={step} uploadFileOnClick={uploadFileOnClick} />
        {(step > 1) ? <Step2_SearchInfo step={step} searchOnITunesAPI={searchOnITunesAPI} /> : ''}
        {(step > 2) ? <Step3_SelectTags step={step} infoData={infoData} submitTagSelection={submitTagSelection}/> : ''}
        {(step > 3) ? <Step4_Download step={step} dlOption={dlOption} downloadOnClick={downloadOnClick} /> : ''}
      </StepsContainer>
    </div>
  );
}

StepWindow.propTypes = {
  pageControlOnClick: PropTypes.func
};