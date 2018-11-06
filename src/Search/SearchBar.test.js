import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from './SearchBar';

describe('[Component] SearchBar', () => {
  const props = {
    onSearch: jest.fn(),
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SearchBar {...props} />
      </MemoryRouter>,
    );

    expect(wrapper.find('SearchInput').prop('onSearch')).toEqual(props.onSearch);
  });
});
