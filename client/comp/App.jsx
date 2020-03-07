// npm packages
import React, { useState, useEffect, useLayoutEffect } from 'react';
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
    <div style={{display: 'flex', fontFamily: 'Open Sans, sans-serif'}}>
      {currentView}
      {music}
    </div>
  );
}

export default App;
