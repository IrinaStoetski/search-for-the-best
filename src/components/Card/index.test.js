/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

test('renders correctly card component', () => {
  const tree = renderer
    .create(<Card />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
