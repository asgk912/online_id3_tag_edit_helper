// npm packages
import React, { useState } from 'react';
// submodules
import Welcome from './Welcome.jsx';
import TwoMethods from './TwoMethods.jsx';

export default function App() {
  const [page, setPage] = useState(0);

  let pageControlOnClick = (e) => {
    if(e.target.parentElement.className.includes('welcome')){
      setPage(0);
      return null;
    }
    if(e.target.parentElement.className.includes('recognition')){
      setPage(1);
      return null;
    }
    if(e.target.parentElement.className.includes('onlineSearch')){
      setPage(2);
      return null;
    }
    /*
    switch(e.target.parentElement.className){
      case 'welcome':
        
        break;
      case 'recognition':
        setPage(1);
        break;
      case 'onelineSearch':
        setPage(2);
        break;
      default:
        setPage(0);
    }
    */
  }

  return (
    <div>
      {page === 0 ? <Welcome pageControlOnClick={pageControlOnClick}/>
                  : <TwoMethods page={page} pageControlOnClick={pageControlOnClick} />}
    </div>
  );
}
