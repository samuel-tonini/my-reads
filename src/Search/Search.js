import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { search } from '../BooksAPI';
import SearchBar from './SearchBar';
import SearchContent from './SearchContent';

const styles = () => ({
  root: {
    width: '100%',
  },
});

class Search extends Component {
  state = {
    books: [],
  };

  handleSearch = (pesquisa) => {
    if (pesquisa === '') {
      this.setState({ books: [] });
    } else {
      search(pesquisa).then(books => this.setState({ books: books.error ? [] : books }));
    }
  };

  render() {
    const {
      classes: { root },
      books: booksProps,
      onShelfChange,
    } = this.props;

    let { books: booksState } = this.state;

    // Merge entre o livros da busca e os das estantes do usuario
    booksState = booksState.map((bookState) => {
      const [bookProps] = booksProps.filter(b => b.id === bookState.id);
      if (bookProps) {
        return { ...bookState, shelf: bookProps.shelf };
      }
      return bookState;
    });

    return (
      <div className={root}>
        <CssBaseline />
        <SearchBar onSearch={this.handleSearch} />
        <SearchContent books={booksState} onShelfChange={onShelfChange} />
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  books: PropTypes.instanceOf(Object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Search);
