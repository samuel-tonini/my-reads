import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router-dom';
import Text from '../Components/Text';
import IconButton from '../Components/IconButton';

const drawerWidth = 240;

const styles = theme => ({
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
  title: {
    flex: 1,
  },
});

const LibraryBar = ({ classes: { appBar, menuButton, title }, onDrawerToggle, history }) => (
  <AppBar position="fixed" className={appBar}>
    <Toolbar>
      <IconButton
        color="inherit"
        text="Exibir Menu"
        onClick={onDrawerToggle}
        className={menuButton}
        icon={<MenuIcon />}
      />
      <Text variant="h6" color="inherit" noWrap className={title} text="Livros" />
      <IconButton
        color="inherit"
        onClick={() => {
          history.push('/search');
        }}
        icon={<SearchIcon />}
      />
    </Toolbar>
  </AppBar>
);

LibraryBar.propTypes = {
  classes: PropTypes.shape({
    appBar: PropTypes.string.isRequired,
    menuButton: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(LibraryBar));
