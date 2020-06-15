// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// styled components
import { NavBar, AppIcon, ColoredIcon } from './style.jsx';

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
      <ColoredIcon className="material-icons-outlined" style={{position: 'absolute', left: '20px', top: '10px'}}>library_music</ColoredIcon>
      {/* <AppIcon className='far fa-file-audio' style={{position: 'absolute', left: '20px', top: '10px'}}/> */}
      {stepStatus[0] ? <ColoredIcon className="material-icons step1" onMouseEnter={controlColoring}>looks_one</ColoredIcon> :
                    <ColoredIcon className="material-icons-outlined step1" onMouseLeave={controlColoring}>looks_one</ColoredIcon>}
      <ColoredIcon className="material-icons">more_horiz</ColoredIcon>
      {stepStatus[1] ? <ColoredIcon className="material-icons" onMouseEnter={controlColoring}>looks_two</ColoredIcon> :
                    <ColoredIcon className="material-icons-outlined" onMouseLeave={controlColoring}>looks_two</ColoredIcon>}
      <ColoredIcon className="material-icons">more_horiz</ColoredIcon>
      {stepStatus[2] ? <ColoredIcon className="material-icons" onMouseEnter={controlColoring}>looks_3</ColoredIcon> :
                    <ColoredIcon className="material-icons-outlined" onMouseLeave={controlColoring}>looks_3</ColoredIcon>}
      <ColoredIcon className="material-icons">more_horiz</ColoredIcon>
      {stepStatus[3] ? <ColoredIcon className="material-icons" onMouseEnter={controlColoring}>looks_4</ColoredIcon> :
                    <ColoredIcon className="material-icons-outlined" onMouseLeave={controlColoring}>looks_4</ColoredIcon>}
    </NavBar>
  );
}

NavigationBar.propTypes = {
  step: PropTypes.number,
  dispControlOnClick: PropTypes.func
};
