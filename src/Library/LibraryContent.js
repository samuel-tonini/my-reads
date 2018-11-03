import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import BookCardList from '../BookCard/BookCardList';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

const LibraryContent = ({
  classes: { content, toolbar, chip },
  filter,
  onShelfChange,
  onShelfFilter,
  books,
}) => (
  <main className={content}>
    <div className={toolbar} />
    {filter && (
      <Chip
        color="primary"
        label="Mostrar todos os livros"
        onClick={() => onShelfFilter('')}
        className={chip}
      />
    )}
    <BookCardList
      books={filter ? books.filter(book => book.shelf === filter) : books}
      onShelfChange={onShelfChange}
    />
  </main>
);

LibraryContent.propTypes = {
  classes: PropTypes.shape({
    content: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
    chip: PropTypes.string.isRequired,
  }).isRequired,
  books: PropTypes.arrayOf(Object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
  onShelfFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(LibraryContent);
