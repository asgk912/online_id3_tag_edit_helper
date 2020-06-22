// npm packages
import React, { useState } from 'react';
// submodules
import Welcome from './Welcome.jsx';
import StepWindow from './StepWindow.jsx';

export default function App() {
  const [page, setPage] = useState(true);

  let pageControlOnClick = () => {
    setPage(!page);
  }

  return (
    <div style={{height: innerHeight, overflow: 'hidden'}}>
      {page ? <Welcome pageControlOnClick={pageControlOnClick} />
              : <StepWindow pageControlOnClick={pageControlOnClick} />}
    </div>
  );
}
