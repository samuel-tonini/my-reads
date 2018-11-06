import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Search from './Search';

describe('[Component] Search', () => {
  const props = {
    onShelfChange: jest.fn(),
    books: [],
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Search {...props} />
      </MemoryRouter>,
    );

    expect(wrapper.find('SearchContent').prop('onShelfChange')).toEqual(props.onShelfChange);
  });
});
