import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';
import IconButton from '../Components/IconButton';
import Text from '../Components/Text';
import SearchInput from './SearchInput';

const SearchBar = ({ history, onSearch }) => (
  <AppBar position="fixed">
    <Toolbar>
      <IconButton
        color="inherit"
        onClick={() => {
          history.push('/');
        }}
        icon={<ArrowBack />}
      />
      <Text text="Pesquisa" variant="h6" color="inherit" />
      <SearchInput onSearch={onSearch} />
    </Toolbar>
  </AppBar>
);

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(SearchBar);
