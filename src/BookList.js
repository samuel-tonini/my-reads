import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Book from '@material-ui/icons/Book';
import Favorite from '@material-ui/icons/Favorite';
import LocalLibrary from '@material-ui/icons/LocalLibrary';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  cardText: {
    maxWidth: 300,
  },
});

const BookList = ({ classes, books }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      {books.map(book => (
        <Grid item md="auto" key={book.id}>
          <Paper className={classes.paper}>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5" className={classes.cardText}>
                    {book.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className={classes.cardText}
                  >
                    {book.authors.join(', ')}
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton aria-label="Quero ler">
                    <Favorite />
                  </IconButton>
                  <IconButton aria-label="Lendo">
                    <LocalLibrary />
                  </IconButton>
                  <IconButton aria-label="Lido">
                    <Book />
                  </IconButton>
                </div>
              </div>
              <CardMedia
                className={classes.cover}
                image={book.imageLinks.smallThumbnail}
                title={book.title}
              />
            </Card>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </div>
);

BookList.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  books: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(BookList);
