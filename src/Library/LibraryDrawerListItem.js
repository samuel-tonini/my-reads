import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Badge } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
});

const LibraryDrawerListItem = ({
  item: {
    id, count, text, icon,
  },
  classes: { margin },
  onShelfFilter,
}) => (
  <ListItem
    button
    onClick={() => {
      onShelfFilter(id);
    }}
  >
    <ListItemIcon>
      <Badge className={margin} badgeContent={count} color="secondary">
        {icon}
      </Badge>
    </ListItemIcon>
    {<ListItemText primary={text} />}
  </ListItem>
);

LibraryDrawerListItem.propTypes = {
  classes: PropTypes.shape({
    margin: PropTypes.string.isRequired,
  }).isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    icon: PropTypes.instanceOf(Object).isRequired,
  }).isRequired,
  onShelfFilter: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(LibraryDrawerListItem);
