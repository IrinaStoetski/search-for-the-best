/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './index';

describe('Spinner component', () => {
  test('renders correctly without props', () => {
    const tree = renderer
      .create(<Spinner />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
