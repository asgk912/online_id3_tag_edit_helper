// npm packages
import React, { useState } from 'react';
// submodules
import Welcome from './Welcome.jsx';
import EditHelper from './EditHelper.jsx';

export default function App() {
  const [page, setPage] = useState(0);

  let pageControlOnClick = (e) => {
    switch(e.target.className){
      case 'welcome':
        setPage(0);
        break;
      case 'recognition':
        setPage(1);
        break;
      default:
        setPage(0);
    }
  }

  return (
    <div>
      {page === 0 ? <Welcome pageControlOnClick={pageControlOnClick}/> : <EditHelper />}
    </div>
  );
}
