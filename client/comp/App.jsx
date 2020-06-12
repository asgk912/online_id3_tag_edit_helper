// npm packages
import React, { useState } from 'react';
// submodules
import Welcome from './Welcome.jsx';
import EditWindow from './EditWindow.jsx';

export default function App() {
  const [display, setDisplay] = useState(true);

  let dispControlOnClick = (e) => {
    switch(e.target.id){
      case 'welcome':
        setDisplay(false);
        break;
      case 'editWindow':
        setDisplay(true);
        break;
      default:
        setDisplay(true);
    }
  }

  return (
    <div>
      {display ? <Welcome dispControlOnClick={dispControlOnClick} />
              : <EditWindow dispControlOnClick={dispControlOnClick} />}
    </div>
  );
}
