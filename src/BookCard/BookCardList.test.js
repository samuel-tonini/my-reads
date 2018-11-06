import React from 'react';
import { mount } from 'enzyme';
import BookCardList from './BookCardList';

describe('[Component] BookCardList', () => {
  const props = {
    onShelfChange: jest.fn(),
    classes: {
      root: 'rootClassaname',
    },
    books: [
      { id: 'bookId1', imageLinks: { smallThumbnail: 'url' } },
      { id: 'bookId2', imageLinks: { smallThumbnail: 'url' } },
      { id: 'bookId3', imageLinks: { smallThumbnail: 'url' } },
    ],
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(<BookCardList {...props} />);

    expect(
      wrapper
        .find('BookCardList')
        .childAt(0)
        .prop('className'),
    ).toContain(props.classes.root);

    wrapper.find('BookCard').forEach((node) => {
      expect(props.books.includes(node.prop('book'))).toBeTruthy();
      expect(node.prop('onShelfChange')).toEqual(props.onShelfChange);
    });
  });
});
