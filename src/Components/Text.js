import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Text = ({
  text, variant, color, className, align, noWrap,
}) => (
  <Typography align={align} variant={variant} color={color} className={className} noWrap={noWrap}>
    {text}
  </Typography>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
  align: PropTypes.string,
  noWrap: PropTypes.bool,
  className: PropTypes.string,
};

Text.defaultProps = {
  color: 'default',
  className: '',
  align: 'inherit',
  noWrap: false,
};

export default Text;
