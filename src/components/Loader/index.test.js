/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './index';

describe('Loader component', () => {
  test('renders correctly without props', () => {
    const tree = renderer
      .create(<Loader />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
