import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing.unit,
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
});

class SearchInput extends Component {
  state = {
    pesquisa: '',
  };

  handleInputChange = (e) => {
    this.setState({ pesquisa: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { onSearch } = this.props;
    const { pesquisa } = this.state;

    onSearch(pesquisa);
  };

  render() {
    const {
      classes: {
        search, searchIcon, inputInput, inputRoot,
      },
    } = this.props;
    const { pesquisa } = this.state;

    return (
      <form className={search} onSubmit={this.handleSubmit}>
        <div className={searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Digite o nome do livro ou do(s) autor(es)"
          classes={{
            root: inputRoot,
            input: inputInput,
          }}
          autoFocus
          value={pesquisa}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

SearchInput.propTypes = {
  classes: PropTypes.shape({
    search: PropTypes.string.isRequired,
    searchIcon: PropTypes.string.isRequired,
    inputInput: PropTypes.string.isRequired,
    inputRoot: PropTypes.string.isRequired,
  }).isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchInput);
