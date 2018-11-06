import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Text from '../Components/Text';

const styles = () => ({
  content: {
    flex: '1 0 auto',
  },
  cardText: {
    width: 300,
  },
});

const BookCardContent = ({ title, authors, classes: { content, cardText } }) => (
  <CardContent className={content}>
    <Text variant="h5" className={cardText} text={title} />
    <Text
      variant="subtitle1"
      color="textSecondary"
      className={cardText}
      text={(authors || []).join(', ')}
    />
  </CardContent>
);

BookCardContent.propTypes = {
  authors: PropTypes.arrayOf(String),
  title: PropTypes.string,
  classes: PropTypes.shape({
    content: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired,
  }).isRequired,
};

BookCardContent.defaultProps = {
  authors: [],
  title: '',
};

export default withStyles(styles)(BookCardContent);
