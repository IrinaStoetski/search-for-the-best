/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutContext } from '../../contextProviders/LayoutContext';
import Paginator from './index';

test('renders correctly Paginator component', () => {
  const getRepositoriesList = () => null;
  const isLoading = false;
  const activeQuery = {};

  const tree = renderer
    .create(
      <LayoutContext.Provider
        value={{
          getRepositoriesList,
          isLoading,
          activeQuery,
        }}
      >
        <Paginator />
      </LayoutContext.Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
