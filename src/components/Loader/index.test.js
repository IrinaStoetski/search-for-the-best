/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './index';

test('renders correctly active button', () => {
  const tree = renderer
    .create(<Loader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
