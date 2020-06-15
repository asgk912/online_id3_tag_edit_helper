// npm packages
import React, { useState } from 'react';
// submodules
import Welcome from './Welcome.jsx';
import EditWindow from './EditWindow.jsx';

export default function App() {
  const [page, setPage] = useState(true);

  let pageControlOnClick = (e) => {
    switch(e.target.id){
      case 'welcome':
        setPage(false);
        break;
      case 'editWindow':
        setPage(true);
        break;
      default:
        setPage(true);
    }
  }

  return (
    <div>
      {page ? <Welcome pageControlOnClick={pageControlOnClick} />
              : <EditWindow pageControlOnClick={pageControlOnClick} />}
    </div>
  );
}
