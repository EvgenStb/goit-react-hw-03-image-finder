import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <>
      <button type="button" className="Button" onClick={() => onClick(1)}>
        Load more
      </button>
    </>
  );
};
Button.prototype = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
