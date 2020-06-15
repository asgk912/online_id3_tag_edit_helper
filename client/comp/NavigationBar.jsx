// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// styled components
import { NavBar, MusicIcon, StepIcon } from './style.jsx';

export default function NavigationBar({ step }) {
  const [musicIcon, setMusicIcon] = useState(true);

  // changeIconOnMouse = () => {
    
  // }

  return (
    <NavBar>
      <MusicIcon className="material-icons-outlined" fs={"36px"}>library_music</MusicIcon>
      {/* {musicIcon ? <MusicIcon className="material-icons-outlined" style={{position: 'absolute', left: '20px', top: '10px'}}>library_music</MusicIcon> :
                  <MusicIcon className="material-icons" style={{position: 'absolute', left: '20px', top: '10px'}}>library_music</MusicIcon>} */}
      
      {step === 0 ? <StepIcon className="material-icons step1">looks_one</StepIcon> :
                    <StepIcon className="material-icons-outlined step1">looks_one</StepIcon>}
      <StepIcon className="material-icons">more_horiz</StepIcon>
      {step === 1 ? <StepIcon className="material-icons">looks_two</StepIcon> :
                    <StepIcon className="material-icons-outlined">looks_two</StepIcon>}
      <StepIcon className="material-icons">more_horiz</StepIcon>
      {step === 2 ? <StepIcon className="material-icons">looks_3</StepIcon> :
                    <StepIcon className="material-icons-outlined">looks_3</StepIcon>}
      <StepIcon className="material-icons">more_horiz</StepIcon>
      {step === 3 ? <StepIcon className="material-icons">looks_4</StepIcon> :
                    <StepIcon className="material-icons-outlined">looks_4</StepIcon>}
    </NavBar>
  );
}

NavigationBar.propTypes = {
  step: PropTypes.number,
  dispControlOnClick: PropTypes.func
};
