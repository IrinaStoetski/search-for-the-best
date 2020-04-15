/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import EmptyState from './index';

test('renders correctly empty state', () => {
  const tree = renderer
    .create(<EmptyState />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
