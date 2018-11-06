import React from 'react';
import { mount } from 'enzyme';
import Book from '@material-ui/icons/Book';
import BookOutlined from '@material-ui/icons/BookOutlined';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import LocalLibraryOutlined from '@material-ui/icons/LocalLibraryOutlined';
import BookCardIconSet from './BookCardIconSet';

describe('[Component] BookCardIconSet', () => {
  const props = {
    book: {
      shelf: 'none',
    },
    onShelfChange: jest.fn(),
    classes: {
      controls: 'controlsClassname',
    },
  };

  it('Props correctly bind', () => {
    const wrapper = mount(<BookCardIconSet {...props} />);

    expect(wrapper.find('div').prop('className')).toContain('controlsClassname');
  });

  it('Must to have three icons', () => {
    const wrapper = mount(<BookCardIconSet {...props} />);

    expect(wrapper.find('div').children()).toHaveLength(3);
  });

  it('Icons without shelf', () => {
    const wrapper = mount(<BookCardIconSet {...props} />);

    expect(wrapper.find('div').contains(<FavoriteBorder />)).toEqual(true);
    expect(wrapper.find('div').contains(<BookOutlined />)).toEqual(true);
    expect(wrapper.find('div').contains(<LocalLibraryOutlined />)).toEqual(true);
  });

  it('Icon with shelf "wantToRead"', () => {
    const newProps = {
      ...props,
      book: {
        shelf: 'wantToRead',
      },
    };

    const wrapper = mount(<BookCardIconSet {...newProps} />);

    expect(wrapper.find('div').contains(<Favorite />)).toEqual(true);
    expect(wrapper.find('div').contains(<FavoriteBorder />)).toEqual(false);
    expect(wrapper.find('div').contains(<LocalLibraryOutlined />)).toEqual(true);
    expect(wrapper.find('div').contains(<BookOutlined />)).toEqual(true);
  });

  it('Icon with shelf "currentlyReading"', () => {
    const newProps = {
      ...props,
      book: {
        shelf: 'currentlyReading',
      },
    };

    const wrapper = mount(<BookCardIconSet {...newProps} />);

    expect(wrapper.find('div').contains(<FavoriteBorder />)).toEqual(true);
    expect(wrapper.find('div').contains(<LocalLibrary />)).toEqual(true);
    expect(wrapper.find('div').contains(<LocalLibraryOutlined />)).toEqual(false);
    expect(wrapper.find('div').contains(<BookOutlined />)).toEqual(true);
  });

  it('Icon with shelf "read"', () => {
    const newProps = {
      ...props,
      book: {
        shelf: 'read',
      },
    };

    const wrapper = mount(<BookCardIconSet {...newProps} />);

    expect(wrapper.find('div').contains(<FavoriteBorder />)).toEqual(true);
    expect(wrapper.find('div').contains(<LocalLibraryOutlined />)).toEqual(true);
    expect(wrapper.find('div').contains(<Book />)).toEqual(true);
    expect(wrapper.find('div').contains(<BookOutlined />)).toEqual(false);
  });

  it('"wantToRead" is correctly called', () => {
    const newProps = {
      ...props,
      onShelfChange: jest.fn(),
    };

    const wrapper = mount(<BookCardIconSet {...newProps} />);

    wrapper
      .find('div')
      .childAt(0)
      .simulate('click');

    expect(newProps.onShelfChange).toHaveBeenCalledTimes(1);
  });

  it('"currentlyReading" is correctly called', () => {
    const newProps = {
      ...props,
      onShelfChange: jest.fn(),
    };

    const wrapper = mount(<BookCardIconSet {...newProps} />);

    wrapper
      .find('div')
      .childAt(1)
      .simulate('click');

    expect(newProps.onShelfChange).toHaveBeenCalledTimes(1);
  });

  it('"read" is correctly called', () => {
    const newProps = {
      ...props,
      onShelfChange: jest.fn(),
    };

    const wrapper = mount(<BookCardIconSet {...newProps} />);

    wrapper
      .find('div')
      .childAt(2)
      .simulate('click');

    expect(newProps.onShelfChange).toHaveBeenCalledTimes(1);
  });
});
