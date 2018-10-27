import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Divider,
  Badge,
  Chip,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Book, Favorite, LocalLibrary } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router-dom';
import BookList from './BookList';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

class Library extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const {
      classes, container, history, books, onShelfChange, onShelfFilter, filter,
    } = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <Typography variant="h5" align="center">
            My Reads
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary">
            by: Samuel Tonini
          </Typography>
        </div>
        <Divider />
        <List>
          {[
            { text: 'Quero Ler', icon: <Favorite />, shelf: 'wantToRead' },
            { text: 'Lendo', icon: <LocalLibrary />, shelf: 'currentlyReading' },
            { text: 'Lido', icon: <Book />, shelf: 'read' },
          ].map(({ text, icon, shelf }) => (
            <ListItem
              button
              key={text.toLowerCase().replace(' ', '-')}
              onClick={() => onShelfFilter(shelf)}
            >
              <ListItemIcon>
                <Badge
                  className={classes.margin}
                  badgeContent={books.filter(book => book.shelf === shelf).length}
                  color="secondary"
                >
                  {icon}
                </Badge>
              </ListItemIcon>
              {<ListItemText primary={text} />}
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap style={{ flex: 1 }}>
              Livros
            </Typography>
            <IconButton
              color="inherit"
              onClick={() => {
                history.push('/search');
              }}
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {filter && (
            <Chip
              color="primary"
              label="Mostrar todos os livros"
              onClick={() => onShelfFilter('')}
              className={classes.chip}
            />
          )}

          <BookList
            books={filter ? books.filter(book => book.shelf === filter) : books}
            onShelfChange={onShelfChange}
          />
        </main>
      </div>
    );
  }
}

Library.defaultProps = {
  container: null,
};

Library.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  container: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object).isRequired,
  books: PropTypes.instanceOf(Object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
  onShelfFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Library));
