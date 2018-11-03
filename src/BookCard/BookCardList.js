import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BookCard from './BookCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
});

const BookCardList = ({ classes: { root, paper }, books, onShelfChange }) => (
  <div className={root}>
    <Grid container spacing={24}>
      {books.map((book) => {
        const { id } = book;
        return (
          <Grid item md="auto" key={id}>
            <Paper className={paper}>
              <BookCard book={book} onShelfChange={onShelfChange} />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  </div>
);

BookCardList.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
  }).isRequired,
  books: PropTypes.instanceOf(Object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(BookCardList);
