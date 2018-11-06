import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import LibraryBar from './LibraryBar';

describe('[Component] LibraryBar', () => {
  const props = {
    onDrawerToggle: jest.fn(),
    classes: {
      appBar: 'appBarClassname',
      menuButton: 'menuButtonClassname',
      title: 'titleClassname',
    },
  };

  it('Props are correctly binded', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LibraryBar {...props} />
      </MemoryRouter>,
    );

    expect(wrapper.find('AppBar').prop('className')).toContain(props.classes.appBar);
    expect(wrapper.find('Text').prop('className')).toContain(props.classes.title);
    expect(
      wrapper
        .find('IconButton')
        .at(0)
        .prop('className'),
    ).toContain(props.classes.menuButton);
  });

  it('Click is correctly binded', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LibraryBar {...props} />
      </MemoryRouter>,
    );

    wrapper
      .find('IconButton')
      .at(0)
      .simulate('click');

    expect(props.onDrawerToggle).toHaveBeenCalledTimes(1);
  });
});
