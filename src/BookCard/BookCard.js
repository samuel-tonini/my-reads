import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import BookCardIconSet from './BookCardIconSet';
import BookCardContent from './BookCardContent';
import BookCardMedia from './BookCardMedia';

const styles = theme => ({
  card: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      height: 200,
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardText: {
    maxWidth: 300,
  },
});

const BookCard = ({ classes: { card, details, cardText }, book, onShelfChange }) => {
  const { title, authors } = book;

  const thumbnail = book.imageLinks
    ? book.imageLinks.smallThumbnail
    : 'https://affinitas.com.br/wp-content/uploads/2017/03/indisponivel.png';

  return (
    <Card className={card}>
      <div className={details}>
        <BookCardContent title={title} authors={authors} textClassName={cardText} />
        <BookCardIconSet book={book} onShelfChange={onShelfChange} />
      </div>
      {thumbnail && <BookCardMedia image={thumbnail} title={title} />}
    </Card>
  );
};

BookCard.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired,
  }).isRequired,
  book: PropTypes.instanceOf(Object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(BookCard);
