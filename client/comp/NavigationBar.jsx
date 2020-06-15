// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
// styled components
import { NavBar, MusicIcon, StepIcon } from './style.jsx';

export default function NavigationBar({ step, pageControlOnClick }) {
  const [musicIcon, setMusicIcon] = useState(true);

  let changeMusicIconOnMouse = () => {
    setMusicIcon(!musicIcon);
  }

  return (
    <NavBar>
      {musicIcon ? <MusicIcon className="material-icons-outlined" fs="36px" onMouseEnter={changeMusicIconOnMouse}>library_music</MusicIcon> :
                  <OverlayTrigger placement="right" overlay={<Tooltip>Back to the welcome page.</Tooltip>} >
                    <MusicIcon className="material-icons" fs="36px" onClick={pageControlOnClick} onMouseLeave={changeMusicIconOnMouse}>library_music</MusicIcon>
                  </OverlayTrigger>}
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
  pageControlOnClick: PropTypes.func
};
