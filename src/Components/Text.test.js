import React from 'react';
import { mount } from 'enzyme';
import Text from './Text';

describe('[Component] Text', () => {
  it('Props default values', () => {
    const wrapper = mount(<Text text="test" variant="h1" />);

    expect(wrapper.find('Typography').prop('color')).toEqual('default');
    expect(wrapper.find('Typography').prop('align')).toEqual('inherit');
    expect(wrapper.find('Typography').prop('noWrap')).toEqual(false);
    expect(wrapper.find('Typography').prop('className')).toEqual('');
  });

  it('Props are correctly binded', () => {
    const wrapper = mount(
      <Text text="test" variant="h1" color="inherit" align="center" noWrap className="test" />,
    );

    expect(wrapper.find('Typography').prop('variant')).toEqual('h1');
    expect(wrapper.find('Typography').prop('color')).toEqual('inherit');
    expect(wrapper.find('Typography').prop('align')).toEqual('center');
    expect(wrapper.find('Typography').prop('noWrap')).toEqual(true);
    expect(wrapper.find('Typography').prop('className')).toEqual('test');

    // text = children
    expect(wrapper.find('Typography').prop('children')).toEqual('test');
  });
});
