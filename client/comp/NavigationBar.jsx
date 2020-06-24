// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
// styled components
import { NavBar, MusicIcon, StepIcon } from './style.jsx';

export default function NavigationBar({ step, pageControlOnClick, deleteFileaOnUnload, scrollOnClickNavBar }) {
  const [musicIcon, setMusicIcon] = useState(true);

  let changeMusicIconOnMouse = () => {
    setMusicIcon(!musicIcon);
  }

  return (
    <NavBar id="navigationBar">
      {musicIcon ? <MusicIcon className="material-icons-outlined" fs="36px" onMouseEnter={changeMusicIconOnMouse}>library_music</MusicIcon> :
                  <OverlayTrigger placement="right" overlay={<Tooltip>Back to the welcome page.</Tooltip>} >
                    <MusicIcon className="material-icons" fs="36px" onClick={()=> {deleteFileaOnUnload(); pageControlOnClick(); }} onMouseLeave={changeMusicIconOnMouse}>library_music</MusicIcon>
                  </OverlayTrigger>}
      <StepIcon className={"material-icons" + (step === 1 ? "" : "-outlined") + " step1"} onClick={scrollOnClickNavBar}>looks_one</StepIcon>
      <StepIcon className="material-icons">more_horiz</StepIcon>
      <StepIcon className={"material-icons" + (step === 2 ? "" : "-outlined") + " step2"} onClick={scrollOnClickNavBar}>looks_two</StepIcon>
      <StepIcon className="material-icons">more_horiz</StepIcon>
      <StepIcon className={"material-icons" + (step === 3 ? "" : "-outlined") + " step3"} onClick={scrollOnClickNavBar}>looks_3</StepIcon>
      <StepIcon className="material-icons">more_horiz</StepIcon>
      <StepIcon className={"material-icons" + (step === 4 ? "" : "-outlined") + " step4"} onClick={scrollOnClickNavBar}>looks_4</StepIcon>
    </NavBar>
  );
}

NavigationBar.propTypes = {
  step: PropTypes.number,
  pageControlOnClick: PropTypes.func,
  deleteFileaOnUnload: PropTypes.func,
  scrollOnClickNavBar: PropTypes.func
};
