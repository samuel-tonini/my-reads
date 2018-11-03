import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BookCardList from '../BookCard/BookCardList';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const SearchContent = ({ classes: { content, toolbar }, onShelfChange, books }) => (
  <main className={content}>
    <div className={toolbar} />
    <BookCardList books={books} onShelfChange={onShelfChange} />
  </main>
);

SearchContent.propTypes = {
  classes: PropTypes.shape({
    content: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
  }).isRequired,
  books: PropTypes.arrayOf(Object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchContent);
