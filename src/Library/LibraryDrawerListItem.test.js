import React from 'react';
import { mount } from 'enzyme';
import LibraryDrawerListItem from './LibraryDrawerListItem';

describe('[Component] LibraryDrawerListItem', () => {
  const props = {
    onShelfFilter: jest.fn(),
    classes: {
      margin: 'marginClassName',
    },
    item: {
      id: 'itemId',
      count: 1,
      text: 'itemText',
      icon: <div>Icon</div>,
    },
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(<LibraryDrawerListItem {...props} />);

    expect(wrapper.find('Badge').prop('badgeContent')).toEqual(props.item.count);
    expect(wrapper.find('Badge').prop('children')).toEqual(props.item.icon);
    expect(wrapper.find('Badge').prop('className')).toContain(props.classes.margin);
    expect(wrapper.find('ListItemText').prop('primary')).toEqual(props.item.text);
  });

  it('Click is correctly called', () => {
    const wrapper = mount(<LibraryDrawerListItem {...props} />);

    wrapper.find('ListItem').simulate('click');

    expect(props.onShelfFilter).toHaveBeenCalledTimes(1);
  });
});
