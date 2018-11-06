import React from 'react';
import { mount } from 'enzyme';
import IconButton from './IconButton';

describe('[Component] IconButton', () => {
  const icon = <div>Icon</div>;
  const onClick = jest.fn();

  it('Props default values', () => {
    const props = {
      icon,
      onClick,
    };

    const wrapper = mount(<IconButton {...props} />).childAt(0);

    expect(wrapper.find('IconButton').prop('className')).toEqual('');
    expect(wrapper.find('IconButton').prop('color')).toEqual('default');

    // text = aria-label
    expect(wrapper.find('IconButton').prop('aria-label')).toEqual('');
  });

  it('Props are correctly binded', () => {
    const props = {
      icon,
      onClick,
      className: 'test',
      color: 'inherit',
      text: 'test',
    };

    const wrapper = mount(<IconButton {...props} />).childAt(0);

    expect(wrapper.find('IconButton').prop('onClick')).toEqual(onClick);
    expect(wrapper.find('IconButton').prop('className')).toEqual('test');
    expect(wrapper.find('IconButton').prop('color')).toEqual('inherit');

    // icon = children
    expect(wrapper.find('IconButton').prop('children')).toEqual(icon);

    // text = aria-label
    expect(wrapper.find('IconButton').prop('aria-label')).toEqual('test');
  });

  it('Click is correctly called', () => {
    const props = {
      icon,
      onClick,
    };

    mount(<IconButton {...props} />)
      .childAt(0)
      .find('IconButton')
      .simulate('click');

    expect(props.onClick).toBeCalledTimes(1);
  });
});
