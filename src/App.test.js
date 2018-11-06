import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('[Component] App', () => {
  it('Props are correctly binded', () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(
      wrapper
        .find('Route')
        .at(0)
        .prop('exact'),
    ).toEqual(true);

    expect(
      wrapper
        .find('Route')
        .at(0)
        .prop('path'),
    ).toEqual('/');
  });
});
