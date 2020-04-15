/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

describe('Card component', () => {
  test('renders correctly card component with neccessary props', () => {
    const mockedCardInfo = {
      avatar: 'https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg',
      name: 'User',
      description: 'Description for',
      link: 'https://github.com/stylelint/stylelint',
    };
    const tree = renderer
      .create(<Card {...mockedCardInfo} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
