/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import CardList from './index';

test('renders correctly CardList component', () => {
  const tree = renderer
    .create(<CardList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
