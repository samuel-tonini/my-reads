import React from 'react';
import { mount } from 'enzyme';
import BookCard from './BookCard';

describe('[Component] BookCard', () => {
  const props = {
    onShelfChange: jest.fn(),
    classes: {
      card: 'cardClassaname',
      details: 'detailsClassaname',
      cardText: 'cardTextClassaname',
    },
    book: {
      title: 'bookTitle',
      authors: ['author 1', 'author 2', 'author 3'],
      imageLinks: {
        smallThumbnail: 'imageUrl',
      },
    },
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(<BookCard {...props} />);

    expect(wrapper.find('Card').prop('className')).toContain(props.classes.card);

    expect(
      wrapper
        .find('Card')
        .find('div')
        .at(1) // first div was created inside Card component
        .prop('className'),
    ).toContain(props.classes.details);

    expect(wrapper.find('BookCardContent').prop('title')).toEqual(props.book.title);
    expect(wrapper.find('BookCardContent').prop('authors')).toEqual(props.book.authors);
    expect(wrapper.find('BookCardContent').prop('textClassName')).toContain(props.classes.cardText);

    expect(wrapper.find('BookCardIconSet').prop('book')).toEqual(props.book);
    expect(wrapper.find('BookCardIconSet').prop('onShelfChange')).toEqual(props.onShelfChange);

    expect(wrapper.find('BookCardMedia').prop('image')).toEqual(
      props.book.imageLinks.smallThumbnail,
    );
    expect(wrapper.find('BookCardMedia').prop('title')).toEqual(props.book.title);
  });
});
