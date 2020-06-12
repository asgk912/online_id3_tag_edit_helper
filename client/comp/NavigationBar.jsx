// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// style
import { NavBar, ColoredNumber } from './style.jsx';

export default function NavigationBar({ step, dispControlOnClick }) {
  const [stepStatus, setStepStatus] = useState([step===1, step===2, step===3, step===4]);

  let controlColoring = (e) => {
    let index = 0;
    let temp = stepStatus;
    
    switch (e.target.classList[3]) {
      case 'step1':
        index=0;
        break;
      case 'step2':
        index=1;
        break;
      case 'step3':
        index=2;
        break;
      case 'step4':
        index=3;
        break;
    }
    temp[index] = 1;
  }

  return (
    <NavBar>
      {stepStatus[0] ? <ColoredNumber className="material-icons step1" onMouseEnter={controlColoring}>looks_one</ColoredNumber> :
                    <ColoredNumber className="material-icons-outlined step1" onMouseLeave={controlColoring}>looks_one</ColoredNumber>}
      <ColoredNumber className="material-icons">more_horiz</ColoredNumber>
      {stepStatus[1] ? <ColoredNumber className="material-icons" onMouseEnter={controlColoring}>looks_two</ColoredNumber> :
                    <ColoredNumber className="material-icons-outlined" onMouseLeave={controlColoring}>looks_two</ColoredNumber>}
    </NavBar>
  );
}

NavigationBar.propTypes = {
  step: PropTypes.number,
  dispControlOnClick: PropTypes.func
};
