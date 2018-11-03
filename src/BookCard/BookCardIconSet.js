import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Book from '@material-ui/icons/Book';
import BookOutlined from '@material-ui/icons/BookOutlined';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import LocalLibraryOutlined from '@material-ui/icons/LocalLibraryOutlined';
import IconButton from '../Components/IconButton';

const styles = theme => ({
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

const BookCardIconSet = ({ book, onShelfChange, classes: { controls } }) => {
  const { shelf } = book;

  return (
    <div className={controls}>
      <IconButton
        text="Quero ler"
        icon={shelf === 'wantToRead' ? <Favorite /> : <FavoriteBorder />}
        onClick={() => {
          onShelfChange(book, 'wantToRead');
        }}
      />
      <IconButton
        text="Lendo"
        icon={shelf === 'currentlyReading' ? <LocalLibrary /> : <LocalLibraryOutlined />}
        onClick={() => {
          onShelfChange(book, 'currentlyReading');
        }}
      />
      <IconButton
        text="Lido"
        icon={shelf === 'read' ? <Book /> : <BookOutlined />}
        onClick={() => {
          onShelfChange(book, 'read');
        }}
      />
    </div>
  );
};

BookCardIconSet.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  classes: PropTypes.shape({
    controls: PropTypes.string.isRequired,
  }).isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(BookCardIconSet);
