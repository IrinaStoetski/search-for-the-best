/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

test('renders correctly simple primary button without props', () => {
  const tree = renderer
    .create(<Button />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
