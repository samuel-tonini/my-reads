import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Library from './Library';

describe('[Component] Library', () => {
  const props = {
    classes: {
      root: 'rootClassname',
    },
    filter: 'filterText',
    onShelfChange: jest.fn(),
    onShelfFilter: jest.fn(),
    books: [
      { id: 'bookId1', imageLinks: { smallThumbnail: 'url' }, shelf: 'read' },
      { id: 'bookId2', imageLinks: { smallThumbnail: 'url' }, shelf: 'wantToRead' },
      { id: 'bookId3', imageLinks: { smallThumbnail: 'url' }, shelf: 'currentlyReading' },
    ],
    container: null,
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Library {...props} />
      </MemoryRouter>,
    );

    expect(wrapper.find('div').find(`.${props.classes.root}`)).toHaveLength(1);
    expect(wrapper.find('LibraryDrawer').prop('onShelfFilter')).toEqual(props.onShelfFilter);
    expect(wrapper.find('LibraryDrawer').prop('container')).toEqual(props.container);
    expect(wrapper.find('LibraryContent').prop('books')).toEqual(props.books);
    expect(wrapper.find('LibraryContent').prop('onShelfChange')).toEqual(props.onShelfChange);
    expect(wrapper.find('LibraryContent').prop('onShelfFilter')).toEqual(props.onShelfFilter);
    expect(wrapper.find('LibraryContent').prop('filter')).toEqual(props.filter);
  });
});
