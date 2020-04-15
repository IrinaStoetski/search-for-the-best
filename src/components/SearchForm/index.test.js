/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutContext } from '../../contextProviders/LayoutContext';
import SearchForm from './index';

describe('SearchForm component', () => {
  test('renders correctly with test context provider', () => {
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
});
