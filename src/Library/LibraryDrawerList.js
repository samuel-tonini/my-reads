import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import LibraryDrawerListItem from './LibraryDrawerListItem';

const LibraryDrawerList = ({ list, onShelfFilter }) => (
  <List>
    {list.map((item) => {
      const { id } = item;
      return <LibraryDrawerListItem key={id} item={item} onShelfFilter={onShelfFilter} />;
    })}
  </List>
);

LibraryDrawerList.propTypes = {
  onShelfFilter: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(Object).isRequired,
};

export default LibraryDrawerList;
