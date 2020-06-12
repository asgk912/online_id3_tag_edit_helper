// node packages
import React from 'react';
import PropTypes from 'prop-types';

export default function EditWindow({ step, stepControlOnClick }) {
  return (
    <div>
      EDIT HELPER {step}
    </div>
  );
}

EditWindow.propTypes = {
  step: PropTypes.number,
  stepControlOnClick: PropTypes.func
};
