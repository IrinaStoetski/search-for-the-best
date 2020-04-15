/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import EmptyState from './index';

describe('EmptyState component', () => {
  test('renders correctly empty state without title', () => {
    const tree = renderer
      .create(<EmptyState />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly empty state with title', () => {
    const tree = renderer
      .create(<EmptyState title="Test title" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
