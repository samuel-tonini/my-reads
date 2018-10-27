import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import Library from './Library';
import Search from './Search';
import { getAll, update, get } from './BooksAPI';

class App extends Component {
  state = {
    books: [],
    filter: '',
  };

  componentDidMount = () => this.updateBookList();

  updateBookList = () => getAll().then(books => this.setState({ books }));

  handleShelfFilter = filter => this.setState({ filter });

  handleShelfChange = (book, shelf) => {
    const newShelf = book.shelf === shelf ? 'none' : shelf;
    update(book, newShelf).then((booksList) => {
      const { books } = this.state;
      if (newShelf === 'none') {
        this.setState({ books: books.filter(b => b.id !== book.id) });
      } else {
        const [bookId] = booksList[newShelf].filter(id => id === book.id);
        const [updatedBook] = books.filter(b => b.id === book.id);

        if (bookId) {
          if (updatedBook) {
            const index = books.indexOf(updatedBook);
            books[index].shelf = newShelf;
            this.setState({ books });
          } else {
            get(bookId).then((b) => {
              this.setState({ books: [...books, b] });
            });
          }
        }
      }
    });
  };

  render() {
    const { books, filter } = this.state;
    return (
      <Fragment>
        <Route
          exact
          path="/"
          render={() => (
            <Library
              onShelfChange={this.handleShelfChange}
              books={books}
              onShelfFilter={this.handleShelfFilter}
              filter={filter}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => <Search onShelfChange={this.handleShelfChange} books={books} />}
        />
      </Fragment>
    );
  }
}

export default App;
