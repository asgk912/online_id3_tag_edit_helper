// node packages
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
// submodules
import ChooseFile from './ChooseFile.jsx';
import SearchForm from './SearchForm.jsx';
import SelectTags from './SelectTags.jsx';


export default function EditHelper() {
/*
  const [step, setStep] = useState(3);
  var fileInputRef = React.createRef();

  START: Declare Event Listeners

  var uploadFileOnClick = () => {
    var data = new FormData();
    data.append('audio', fileInputRef.current.files[0]);

    axios.post('/api/v1/file', data, {
      header: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(() => {
        setStep(2);
      })
      .catch((err) => console.log(err));
  }

  let searchOnApi = (artist, title) => {
    let config = {}
    config.params = {
      term: `${artist.trim()} ${title.trim()}`
    }

    axios.get('/api/v1/search', config)
      .then((res) => {
        console.log(res.data);
        setStep(3);
      })
      .catch((e) => console.log(e));
  };

  let downloadFileOnClick = () => {
    axios.get('/api/v1/file')
      .then(() => {
        window.open('/api/v1/file');
      })
      .catch((err) => console.log(err));
  }

  END: Declare Event Listeners

  let step2 = (step > 1) ? <SearchForm searchOnApi={searchOnApi}/>: '';
  let step3 = (step > 2) ? <SelectTags/>: '';

  <ChooseFile ref={fileInputRef} uploadFileOnClick={uploadFileOnClick}/>
  {step2}
  {step3}
  <Button onClick={downloadFileOnClick}>Download File</Button>
*/
  return (
    <div>
      EDIT HELPER
    </div>
  );
}