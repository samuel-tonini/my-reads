import React from 'react';
import { mount } from 'enzyme';
import BookCardContent from './BookCardContent';

describe('[Component] BookCardContent', () => {
  const props = {
    title: 'contentTitle',
    classes: {
      content: 'contentClassaname',
      cardText: 'cardTextClassaname',
    },
    authors: ['author 1', 'author 2', 'author 3'],
  };

  it('Props default values', () => {
    const wrapper = mount(<BookCardContent classes={props.classes} />);

    expect(
      wrapper
        .find('CardContent')
        .find('Text')
        .at(0)
        .prop('text'),
    ).toEqual('');

    expect(
      wrapper
        .find('CardContent')
        .find('Text')
        .at(1)
        .prop('text'),
    ).toEqual('');
  });

  it('Props are correctly binded', () => {
    const wrapper = mount(<BookCardContent {...props} />);

    expect(wrapper.find('CardContent').prop('className')).toContain(props.classes.content);

    expect(
      wrapper
        .find('CardContent')
        .find('Text')
        .at(0)
        .prop('text'),
    ).toEqual(props.title);

    expect(
      wrapper
        .find('CardContent')
        .find('Text')
        .at(0)
        .prop('className'),
    ).toContain(props.classes.cardText);

    expect(
      wrapper
        .find('CardContent')
        .find('Text')
        .at(1)
        .prop('text'),
    ).toEqual(props.authors.join(', '));

    expect(
      wrapper
        .find('CardContent')
        .find('Text')
        .at(1)
        .prop('className'),
    ).toContain(props.classes.cardText);
  });
});
