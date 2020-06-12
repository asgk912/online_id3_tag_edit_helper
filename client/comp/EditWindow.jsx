// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// submodules
import NavigationBar from './NavigationBar.jsx';

export default function EditWindow({ dispControlOnClick }) {
  const [step, setStep] = useState(1);

  return (
    <div>
      <NavigationBar step={step} dispControlOnClick={dispControlOnClick} />
      <div>Edit Window</div>
    </div>
  );
}

EditWindow.propTypes = {
  dispControlOnClick: PropTypes.func
};
