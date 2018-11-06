import React from 'react';
import { mount } from 'enzyme';
import LibraryContent from './LibraryContent';

describe('[Component] LibraryContent', () => {
  const props = {
    classes: {
      content: 'contentClassname',
      toolbar: 'toolbarClassname',
      chip: 'chipClassname',
    },
    filter: 'filterText',
    onShelfChange: jest.fn(),
    onShelfFilter: jest.fn(),
    books: [
      { id: 'bookId1', imageLinks: { smallThumbnail: 'url' }, shelf: 'read' },
      { id: 'bookId2', imageLinks: { smallThumbnail: 'url' }, shelf: 'wantToRead' },
      { id: 'bookId3', imageLinks: { smallThumbnail: 'url' }, shelf: 'currentlyReading' },
    ],
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(<LibraryContent {...props} />);

    expect(wrapper.find('main').prop('className')).toContain(props.classes.content);
    expect(
      wrapper
        .find('main')
        .find('div')
        .at(0)
        .prop('className'),
    ).toContain(props.classes.toolbar);
    expect(wrapper.find('Chip').prop('className')).toContain(props.classes.chip);
    expect(wrapper.find('BookCardList').prop('onShelfChange')).toEqual(props.onShelfChange);
  });

  it('Books with empty filter', () => {
    const newProps = { ...props, filter: '' };

    const wrapper = mount(<LibraryContent {...newProps} />);

    expect(wrapper.find('BookCardList').prop('books')).toEqual(props.books);
  });

  it('Books are correctly filtered', () => {
    const newProps = { ...props, filter: 'read' };

    const wrapper = mount(<LibraryContent {...newProps} />);

    expect(wrapper.find('BookCardList').prop('books')).toEqual(
      props.books.filter(item => item.shelf === newProps.filter),
    );
  });

  it('Chip not render with empty filter', () => {
    const newProps = { ...props, filter: '' };

    const wrapper = mount(<LibraryContent {...newProps} />);

    expect(wrapper.find('Chip')).toHaveLength(0);
  });

  it('Chip click is correclty binded', () => {
    const wrapper = mount(<LibraryContent {...props} />);

    wrapper.find('Chip').simulate('click');

    expect(props.onShelfFilter).toHaveBeenCalledTimes(1);
  });
});
