// node packages
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// submodules
import NavigationBar from './NavigationBar.jsx';
import Step1_FileUpload from './Step1_FileUpload.jsx';
import Step2_SearchInfo from './Step2_SearchInfo.jsx';
import Step3_SelectTags from './Step3_SelectTags.jsx';
import Step4_Download from './Step4_Download.jsx';
// css style related
import { Alert } from 'react-bootstrap';
import { OverflowDiv, ScrollWidthControlDiv, StepsContainer } from './style.jsx';

export default function StepWindow({ pageControlOnClick }) {
  
  /* 
    Hooks
  */
  // id of uploaded file in database
  const [id, setID] = useState(""); 
  // state to control which steps are shown
  const [step, setStep] = useState(1);

  // states associated with alerts on certain actions
  const [alertUL, setAlertUL] = useState(false);
  const [alertSearch, setAlertSearch] = useState(false);
  const [alertNWErr,setAlertNWErr] = useState(false);

  // states passed down to step 3 and 4
  const [infoData, setInfoData] = useState([]);
  const [dlOption, setDLOption] = useState({original: 'original.mp3', artistTitle: '(artist) - (title).mp3', extension: '.mp3'});

  // Refs to scroll window
  const stepRefs = Array(5).fill(0).map(() => useRef(null));

  // React useeffect
  useEffect(()=> { 
    if(alertUL) { // turn off upload alert in 3s
      setTimeout(() => setAlertUL(false), 3000);
    }

    if(alertSearch) { // turn off search alert in 3s
      setTimeout(() => setAlertSearch(false), 3000);
    }

    if(alertNWErr) { // turn off search alert in 3s
      setTimeout(() => setAlertNWErr(false), 3000);
    }
  }, [alertUL, alertSearch, alertNWErr]);

  // event listner for scroll
  let scrollOnClickNavBar = (e) => {
    let index = parseInt(e.target.classList[3][4]);
    
    if(index <= step) {
      stepRefs[0].current.scrollTo(stepRefs[1].current.offsetLeft - 15, stepRefs[index].current.offsetTop - stepRefs[1].current.offsetTop + 20);
    }
  };

  /*
    Event Listners with http request
  */
  let deleteFileaOnUnload = () => {
    if(id.length > 0) {
      axios({ // send request to delete previously uploaded file
        url: '/api/v1/file',
        method: 'delete',
        data: { id }
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  window.addEventListener("beforeunload", deleteFileaOnUnload)

  // for Step 1: upload file to server
  let uploadFileOnClick = (e, fileInputRef, cb, cbIn) => {
    e.preventDefault();

    if(alertNWErr){ // hide network alert if still shown
      setAlertNWErr(false); 
    }

    let audioFile = fileInputRef.current.files[0];
    
    if(audioFile.size < 12000000) { // check the size of file
      if(alertUL){ // hide file size alert if still shown
        setAlertUL(false); 
      }

      // set form data for post
      let data = new FormData();
      data.append('audio', audioFile);

      // post request with axios
      axios.post('/api/v1/file', data, {
        header: {
          'Content-Type': 'multipart/form-data',
        }
      })
        .then((res) => {
          setID(res.data.id); // set id;

          // control which step to be shown based
          if(step === 1) {            // file is uploaded for the first time
            setStep(2);               // show step 2 only
          } else if (step === 4) {    // have progressed up to step 4 already
            setStep(3);               // keep step 2 and 3 and hide step 4
          }
          
          // disable the submit button (such function is declared in step 1 submodule)
          cb(cbIn);

          // scroll to step 2
          stepRefs[0].current.scrollTo(stepRefs[1].current.offsetLeft - 15, stepRefs[2].current.offsetTop - stepRefs[1].current.offsetTop + 20);
        })
        .catch(() => setAlertNWErr(true));
    } else { // file exceeds the limit, show alert
      setAlertUL(true);
    }
  }
 
  // for Step 2: send http request about search and sets infoData which will be passed down to step 3 
  let searchOnITunesAPI = (e, artist, title) => {
    if(alertNWErr){ // hide network alert if still shown
      setAlertNWErr(false); 
    }

    if(title) {
      e.preventDefault();

      axios({
        url:'/api/v1/search',
        method: 'get',
        params: {term: `${artist.trim()} ${title.trim()}`}
      })
        .then((res) => {
          if(res.data.length > 1) { // if proper search results are received
            if(alertSearch){ // hide search alert if still shown
              setAlertSearch(false); 
            }

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
            
            // scroll to step 3
            stepRefs[0].current.scrollTo(stepRefs[1].current.offsetLeft - 15, stepRefs[3].current.offsetTop - stepRefs[1].current.offsetTop + 20);
          } else {
            setInfoData([]);
            setAlertSearch(true);
          }
        })
        .catch(() => setAlertNWErr(true));
      }
  };

  // for Step 3: send selected tag data to edit the id3 tag of uploade file
  let submitTagSelection = (newTags) => {
    if(alertNWErr){ // hide network alert if still shown
      setAlertNWErr(false); 
    }

    axios({ // send selected tags to server
      url: '/api/v1/selection',
      method: 'post',
      data: { id, newTags }
    })
      .then(({ data }) => { // update filename donwload option
        let extension = data.original.substring(data.original.length - 4)
        let option = {
          original: data.original,
          artistTitle: data.artist + ' - ' + data.title + extension,
          extension: extension
        }

        setDLOption(option) // set state values that are passed down to step 4
        setStep(4); // got to next step

        // scroll to step 4
        stepRefs[0].current.scrollTo(stepRefs[1].current.offsetLeft - 15, stepRefs[4].current.offsetTop - stepRefs[1].current.offsetTop + 20);
      })
      .catch(() => setAlertNWErr(true));
  }

  // for Step 4: modify filename and download file
  let downloadOnClick = (e, fileName) => {
    if(alertNWErr){ // hide network alert if still shown
      setAlertNWErr(false);
    }

    if(fileName){
      e.preventDefault();

      axios({ // first send updated filename
        url: '/api/v1/fileName',
        method: 'post',
        data: { id, fileName }
      })
        .then(()=> window.open(`/api/v1/file/?id=${id}`)) // download file
        .catch(() => setAlertNWErr(true));
    }
  }

  return (
    <div>
      <NavigationBar step={step} pageControlOnClick={pageControlOnClick} deleteFileaOnUnload={deleteFileaOnUnload} scrollOnClickNavBar={scrollOnClickNavBar}/>

      <OverflowDiv ref={stepRefs[0]}>
        <ScrollWidthControlDiv>
          <StepsContainer>
            {/* Steps */}
            <Step1_FileUpload forwardRef={stepRefs[1]} step={step} uploadFileOnClick={uploadFileOnClick} />

            {(step > 1) ? <Step2_SearchInfo forwardRef={stepRefs[2]} step={step} searchOnITunesAPI={searchOnITunesAPI} /> : ''}

            {(step > 2) ? <Step3_SelectTags forwardRef={stepRefs[3]} step={step} infoData={infoData} submitTagSelection={submitTagSelection}/> : ''}

            {(step > 3) ? <Step4_Download forwardRef={stepRefs[4]} step={step} dlOption={dlOption} downloadOnClick={downloadOnClick} /> : ''}
            
            {/* extra white space to make step 3 and 4 in view*/}
            {(step > 2) ? <span><br/><br/><br/><br/></span> : ''}

            {/* Alerts on Errors */}
            {alertUL ?
              <Alert variant="danger" style={{position: "absolute", right: "18px", bottom: 0, width: "350px", height: "90px"}}>
                <Alert.Heading>File Size Too Large</Alert.Heading>
                <div>Please chose file with size &lt; 12 MB</div>
              </Alert> : ''}

            {(step > 1 && alertSearch) ?
              <Alert variant="danger" style={{position: "absolute", right: "18px", bottom: 0, width: "350px", height: "90px"}}>
                <Alert.Heading>No Search Result</Alert.Heading>
                <div>Please modify your search words</div>
              </Alert> : ''}

            {alertNWErr ? 
              <Alert variant="danger" style={{position: "absolute", right: "18px", bottom: 0, width: "350px", height: "90px"}}>
                <Alert.Heading>Network Error</Alert.Heading>
                <div>Please try again in a moment</div>
              </Alert> : ""
            }

          </StepsContainer>
        </ScrollWidthControlDiv>
      </OverflowDiv>
    </div>
  );
}

StepWindow.propTypes = {
  pageControlOnClick: PropTypes.func
};