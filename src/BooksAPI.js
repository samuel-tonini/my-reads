import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import gql from 'graphql-tag';

const api = 'https://reactnd-books-api.udacity.com';

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json',
};

const restLink = new RestLink({
  uri: api, // this is your API base url\
  headers,
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const getAllBooks = gql`
  query {
    books @rest(type: "Books", path: "/books") {
      books @type(name: "Book") {
        title
        authors
        imageLinks @type(name: "ImageLinks") {
          smallThumbnail
        }
        id
        shelf
      }
    }
  }
`;

const getBook = gql`
  query get {
    book(id: $id) @rest(type: "Books", path: "/books/:id") {
      book @type(name: "Book") {
        title
        authors
        imageLinks @type(name: "ImageLinks") {
          smallThumbnail
        }
        id
        shelf
      }
    }
  }
`;

const searchBooks = gql`
  mutation search {
    search(input: $input) @rest(type: "Books", path: "/search", method: "POST") {
      books @type(name: "Book") {
        title
        authors
        imageLinks @type(name: "ImageLinks") {
          smallThumbnail
        }
        id
        shelf
      }
    }
  }
`;

const updateShelf = gql`
  mutation update {
    update(input: $input, id: $id) @rest(type: "Shelfs", path: "/books/:id", method: "PUT") {
      currentlyReading
      wantToRead
      read
    }
  }
`;

export const get = bookId => client.query({ query: getBook, variables: { id: bookId } }).then(res => res.data.book.book);

export const getAll = () => client.query({ query: getAllBooks }).then(res => res.data.books.books);

export const update = (book, shelf) => client
  .mutate({
    mutation: updateShelf,
    variables: { input: { shelf }, id: book.id },
  })
  .then(res => res.data.update);

export const search = query => client
  .mutate({
    mutation: searchBooks,
    variables: { input: { query: query.quote() } },
  })
  .then(res => res.data.search.books);
