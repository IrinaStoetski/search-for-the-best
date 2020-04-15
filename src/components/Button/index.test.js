/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

describe('Button component', () => {
  test('renders correctly simple primary button without props', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly simple primary button with button type and onclick handler', () => {
    // eslint-disable-next-line no-console
    const testFunction = () => console.log('Clicked');
    const tree = renderer
      .create(<Button buttonType="button" onClick={testFunction} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
