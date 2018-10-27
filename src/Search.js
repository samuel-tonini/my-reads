import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  AppBar, Toolbar, Typography, IconButton, InputBase,
} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withRouter } from 'react-router-dom';
import BookList from './BookList';
import { search } from './BooksAPI';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  root: {
    width: '100%',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing.unit,
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
});

class Search extends Component {
  state = {
    pesquisa: '',
    books: [],
  };

  handlePesquisaChange = (e) => {
    const { value } = e.target;
    this.setState({ pesquisa: value });

    if (value === '') {
      this.setState({ books: [] });
    } else {
      search(value).then((books) => {
        const { pesquisa } = this.state;

        if (pesquisa === value.toString()) {
          this.setState({ books: books.error ? [] : books });
        }
      });
    }
  };

  render() {
    const {
      classes, history, books: booksProps, onShelfChange,
    } = this.props;
    const { pesquisa } = this.state;
    let { books: booksState } = this.state;

    booksState = booksState.map((bookState) => {
      const [bookProps] = booksProps.filter(b => b.id === bookState.id);
      if (bookProps) {
        return { ...bookState, shelf: bookProps.shelf };
      }
      return bookState;
    });

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={() => {
                history.push('/');
              }}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Pesquisa
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Digite o nome do livro ou do(s) autor(es)"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                autoFocus
                value={pesquisa}
                onChange={this.handlePesquisaChange}
              />
            </div>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <BookList books={booksState} onShelfChange={onShelfChange} />
        </main>
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  books: PropTypes.instanceOf(Object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Search));
