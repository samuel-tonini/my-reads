import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import Library from './Library/Library';
import Search from './Search/Search';
import { getAll, update, get } from './BooksAPI';

class App extends Component {
  // Books = livros que estam em alguma prateleira
  // Filter = Filtra os livros por prateleira, em branco lista todos os livros
  state = {
    books: [],
    filter: '',
  };

  // Busca todos os livros apos a montagem do componente
  async componentDidMount() {
    const books = await getAll();
    this.setState({ books });
  }

  // Controle do filtro atual usado
  handleShelfFilter = filter => this.setState({ filter });

  // Atualiza a prateleira do livro
  handleShelfChange = (book, shelf) => {
    // Se a nova prateleira for a mesma da atual, significa que nao eh
    // para atualizar a prateleira mas para remove-la
    const newShelf = book.shelf === shelf ? 'none' : shelf;
    update(book, newShelf).then((booksList) => {
      const { books } = this.state;
      if (newShelf === 'none') {
        // Se removeu a prateleira, remove do State
        this.setState({ books: books.filter(b => b.id !== book.id) });
      } else {
        // Se atualizou a prateleira, atualiza no State

        // Verifica se a atualizacao foi bem sucedida
        const [bookId] = booksList[newShelf].filter(id => id === book.id);

        // Busca o livro a ser atualizado
        const [updatedBook] = books.filter(b => b.id === book.id);

        // Atualizou com sucesso?
        if (bookId) {
          // Livro ja existe no State
          if (updatedBook) {
            // Apenas atualiza a prateleira
            const index = books.indexOf(updatedBook);
            books[index].shelf = newShelf;
            this.setState({ books });
          } else {
            // Se nao, busca o livro e concatena no final do State
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
