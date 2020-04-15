// @flow
import React, { useContext } from 'react';
// Components
import Pagination from 'react-js-pagination';
// ContextProviders
import { LayoutContext } from '../../contextProviders/LayoutContext';
// Styles
import './style.scss';

type Props = {
  itemsCount: number,
  activePage: number,
}
const Paginator = ({
  itemsCount,
  activePage,
}: Props) => {
  const layoutContextData = useContext(LayoutContext);
  const { activeQuery, getRepositoriesList } = layoutContextData;

  const handlePageChange = (newPage) => {
    getRepositoriesList(activeQuery, newPage);
  };

  const totalItemsCount = itemsCount / 30;

  return totalItemsCount > 1 && (
  <Pagination
    activePage={activePage}
    totalItemsCount={totalItemsCount}
    pageRangeDisplayed={10}
    onChange={handlePageChange}
    hideDisabled
    hideFirstLastPages
  />
  );
};

export default Paginator;
