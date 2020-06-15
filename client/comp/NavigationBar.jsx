// node packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// styled components
import { NavBar, ColoredIcon } from './style.jsx';

export default function NavigationBar({ step }) {
  return (
    <NavBar>
      <ColoredIcon className="material-icons-outlined" style={{position: 'absolute', left: '20px', top: '10px'}}>library_music</ColoredIcon>
      {step === 0 ? <ColoredIcon className="material-icons step1">looks_one</ColoredIcon> :
                    <ColoredIcon className="material-icons-outlined step1">looks_one</ColoredIcon>}
      <ColoredIcon className="material-icons">more_horiz</ColoredIcon>
      {step === 1 ? <ColoredIcon className="material-icons">looks_two</ColoredIcon> :
                    <ColoredIcon className="material-icons-outlined">looks_two</ColoredIcon>}
      <ColoredIcon className="material-icons">more_horiz</ColoredIcon>
      {step === 2 ? <ColoredIcon className="material-icons">looks_3</ColoredIcon> :
                    <ColoredIcon className="material-icons-outlined">looks_3</ColoredIcon>}
      <ColoredIcon className="material-icons">more_horiz</ColoredIcon>
      {step === 3 ? <ColoredIcon className="material-icons">looks_4</ColoredIcon> :
                    <ColoredIcon className="material-icons-outlined">looks_4</ColoredIcon>}
    </NavBar>
  );
}

NavigationBar.propTypes = {
  step: PropTypes.number,
  dispControlOnClick: PropTypes.func
};
