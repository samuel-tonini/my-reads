import React from 'react';
import { mount } from 'enzyme';
import BookCardMedia from './BookCardMedia';

describe('[Component] BookCardMedia', () => {
  const props = {
    image: 'imageUrl',
    title: 'mediaTitle',
    classes: {
      media: 'mediaClassaname',
    },
  };

  it('Props default values', () => {
    const wrapper = mount(<BookCardMedia className={props.classes.media} />);

    expect(wrapper.find('CardMedia').prop('image')).toEqual('');
    expect(wrapper.find('CardMedia').prop('title')).toEqual('');
  });

  it('Props are correctly binded', () => {
    const wrapper = mount(<BookCardMedia {...props} />);

    expect(wrapper.find('CardMedia').prop('image')).toEqual(props.image);
    expect(wrapper.find('CardMedia').prop('title')).toEqual(props.title);
    expect(wrapper.find('CardMedia').prop('className')).toContain(props.classes.media);
  });
});
