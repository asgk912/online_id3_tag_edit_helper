// npm packages
import React, { useState } from 'react';
// submodules
import Welcome from './Welcome.jsx';
import EditWindow from './EditWindow.jsx';

export default function App() {
  const [page, setPage] = useState(true);

  let pageControlOnClick = () => {
    setPage(!page);
  }

  return (
    <div>
      {page ? <Welcome pageControlOnClick={pageControlOnClick} />
              : <EditWindow pageControlOnClick={pageControlOnClick} />}
    </div>
  );
}
