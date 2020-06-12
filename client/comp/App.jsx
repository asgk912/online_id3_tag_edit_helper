// npm packages
import React, { useState } from 'react';
// submodules
import Welcome from './Welcome.jsx';
import EditWindow from './EditWindow.jsx';

export default function App() {
  const [step, setStep] = useState(0);

  let stepControlOnClick = (e) => {
    switch(e.target.id){
      case 'welcome':
        setStep(1);
        break;
      case 'recognition':
        setStep(1);
        break;
      case 'onelineSearch':
        setStep(2);
        break;
      default:
        setStep(0);
    }
  }

  return (
    <div>
      {step === 0 ? <Welcome stepControlOnClick={stepControlOnClick}/>
                  : <EditWindow step={step} stepControlOnClick={stepControlOnClick} />}
    </div>
  );
}
