/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutContext } from '../../contextProviders/LayoutContext';
import SearchForm from './index';

test('renders correctly SearchForm component', () => {
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
        <SearchForm />
      </LayoutContext.Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
