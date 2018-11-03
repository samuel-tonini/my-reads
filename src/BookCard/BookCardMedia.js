import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const styles = () => ({
  media: {
    width: 151,
  },
});

const BookCardMedia = ({ image, title, classes: { media } }) => (
  <CardMedia className={media} image={image} title={title} />
);

BookCardMedia.propTypes = {
  classes: PropTypes.shape({
    media: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
};

BookCardMedia.defaultProps = {
  image: '',
  title: '',
};

export default withStyles(styles)(BookCardMedia);
