import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const TitleBar = ({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
        Books
      </Typography>
      <IconButton
        color="inherit"
        onClick={() => {
          history.push('/search');
        }}
      >
        <SearchOutlined />
      </IconButton>
    </Toolbar>
  </AppBar>
);

TitleBar.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(TitleBar);
