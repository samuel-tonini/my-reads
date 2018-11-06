import React from 'react';
import { mount } from 'enzyme';
import SearchContent from './SearchContent';

describe('[Component] SearchContent', () => {
  const props = {
    onShelfChange: jest.fn(),
    classes: {
      content: 'contentClassaname',
      toolbar: 'toolbarClassaname',
    },
    books: [
      { id: 'bookId1', imageLinks: { smallThumbnail: 'url' } },
      { id: 'bookId2', imageLinks: { smallThumbnail: 'url' } },
      { id: 'bookId3', imageLinks: { smallThumbnail: 'url' } },
    ],
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(<SearchContent {...props} />);

    expect(wrapper.find('main').prop('className')).toContain(props.classes.content);

    expect(
      wrapper
        .find('div')
        .at(0)
        .prop('className'),
    ).toContain(props.classes.toolbar);
  });
});
