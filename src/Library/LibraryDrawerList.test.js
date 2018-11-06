import React from 'react';
import { mount } from 'enzyme';
import LibraryDrawerList from './LibraryDrawerList';

describe('[Component] LibraryDrawerList', () => {
  const props = {
    onShelfFilter: jest.fn(),
    list: [
      {
        id: 'itemId1',
        count: 1,
        text: 'itemText',
        icon: <div>Icon</div>,
      },
      {
        id: 'itemId2',
        count: 2,
        text: 'itemText',
        icon: <div>Icon</div>,
      },
    ],
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(<LibraryDrawerList {...props} />);

    wrapper.find('LibraryDrawerListItem').forEach((node) => {
      expect(props.list.includes(node.prop('item'))).toEqual(true);
    });

    expect(wrapper.find('LibraryDrawerListItem')).toHaveLength(props.list.length);
  });
});
