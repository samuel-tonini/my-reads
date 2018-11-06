import React from 'react';
import { mount } from 'enzyme';
import SearchInput from './SearchInput';

describe('[Component] SearchInput', () => {
  const props = {
    onShelfChange: jest.fn(),
    classes: {
      search: 'searchClassName',
      searchIcon: 'searchIconClassName',
      inputInput: 'inputInputClassName',
      inputRoot: 'inputRootClassName',
    },
    onSearch: jest.fn(),
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(<SearchInput {...props} />);

    expect(wrapper.find('form').prop('className')).toContain(props.classes.search);
    expect(
      wrapper
        .find('form')
        .find('div')
        .at(0)
        .prop('className'),
    ).toContain(props.classes.searchIcon);
    expect(wrapper.find('InputBase').prop('classes').root).toContain(props.classes.inputRoot);
    expect(wrapper.find('InputBase').prop('classes').input).toContain(props.classes.inputInput);
  });

  it('"onSearch" is correctly called', () => {
    const wrapper = mount(<SearchInput {...props} />);

    wrapper.find('form').simulate('submit');

    expect(props.onSearch).toHaveBeenCalledTimes(1);
  });
});
