/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './index';

test('renders correctly active button', () => {
  const tree = renderer
    .create(<Spinner />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
