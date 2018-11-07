import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Hidden, Divider } from '@material-ui/core';
import Text from '../Components/Text';
import LibraryDrawerList from './LibraryDrawerList';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
});

const LibraryDrawer = ({
  list,
  onShelfFilter,
  classes: { toolbar, drawer: drawerContent, drawerPaper },
  container,
  drawerOpen,
  onDrawerToggle,
}) => {
  const drawer = (
    <Fragment>
      <div className={toolbar}>
        <Text
          variant="h5"
          align="center"
          text={<a href="https://github.com/samuel-tonini/my-reads">My Reads</a>}
        />
        <Text
          variant="h6"
          align="center"
          color="textSecondary"
          text={<a href="https://github.com/samuel-tonini">by: Samuel Tonini</a>}
        />
      </div>
      <Divider />
      <LibraryDrawerList list={list} onShelfFilter={onShelfFilter} />
    </Fragment>
  );

  return (
    <nav className={drawerContent}>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={drawerOpen}
          onClose={onDrawerToggle}
          classes={{
            paper: drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

LibraryDrawer.defaultProps = {
  container: null,
};

LibraryDrawer.propTypes = {
  classes: PropTypes.shape({
    toolbar: PropTypes.string.isRequired,
    drawer: PropTypes.string.isRequired,
    drawerPaper: PropTypes.string.isRequired,
  }).isRequired,
  list: PropTypes.arrayOf(Object).isRequired,
  container: PropTypes.instanceOf(Object),
  onShelfFilter: PropTypes.func.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(LibraryDrawer);
