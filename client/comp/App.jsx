// npm packages
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [step, setStep] = useState(1);
  
  let currentView = <div>I am working... Wait</div>;
  let music = <div>what?</div>
  // useLayoutEffect(() => {
  //   axios.get('/api/search')
  //     .then(() => {console.log('successfully sent request to server')})
  // },[]);

  

  return (
    <div>
      {currentView}
      <Button>Bootstrap Working?</Button>
    </div>
  );
}

export default App;
