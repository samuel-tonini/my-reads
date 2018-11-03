import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Book, Favorite, LocalLibrary } from '@material-ui/icons';
import LibraryDrawer from './LibraryDrawer';
import LibraryBar from './LibraryBar';
import LibraryContent from './LibraryContent';

const styles = () => ({
  root: {
    display: 'flex',
  },
});

class Library extends Component {
  state = {
    drawerOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ drawerOpen: !state.drawerOpen }));
  };

  render() {
    const {
      classes: { root },
      container,
      books,
      onShelfChange,
      onShelfFilter,
      filter,
    } = this.props;
    const { drawerOpen } = this.state;

    let shelfList = [
      {
        text: 'Quero Ler',
        icon: <Favorite />,
        id: 'wantToRead',
        count: 0,
      },
      {
        text: 'Lendo',
        icon: <LocalLibrary />,
        id: 'currentlyReading',
        count: 0,
      },
      {
        text: 'Lido',
        icon: <Book />,
        id: 'read',
        count: 0,
      },
    ];

    shelfList = shelfList.map((item) => {
      const { id } = item;
      const count = books.filter(({ shelf }) => shelf === id).length;
      return { ...item, count };
    });

    return (
      <div className={root}>
        <CssBaseline />
        <LibraryBar onDrawerToggle={this.handleDrawerToggle} />
        <LibraryDrawer
          list={shelfList}
          onShelfFilter={onShelfFilter}
          container={container}
          drawerOpen={drawerOpen}
          onDrawerToggle={this.handleDrawerToggle}
        />
        <LibraryContent
          books={books}
          onShelfChange={onShelfChange}
          onShelfFilter={onShelfFilter}
          filter={filter}
        />
      </div>
    );
  }
}

Library.defaultProps = {
  container: null,
};

Library.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  container: PropTypes.instanceOf(Object),
  books: PropTypes.instanceOf(Object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
  onShelfFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(Library);
