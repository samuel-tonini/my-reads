import React from 'react';
import PropTypes from 'prop-types';
import { IconButton as IconedButton } from '@material-ui/core';

const IconButton = ({
  text, icon, onClick, color, className,
}) => (
  <IconedButton aria-label={text} onClick={onClick} color={color} className={className}>
    {icon}
  </IconedButton>
);

IconButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
  text: '',
  className: '',
  color: 'default',
};

export default IconButton;
