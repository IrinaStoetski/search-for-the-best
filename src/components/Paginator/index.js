import React, { useContext } from 'react';
// ContextProviders
import Pagination from 'react-js-pagination';
import { LayoutContext } from '../../contextProviders/LayoutContext';
// Components
// Styles
import './style.scss';

const Paginator = ({ itemsCount, activePage }) => {
  const layoutContextData = useContext(LayoutContext);
  const { activeQuery, getRepositoriesList } = layoutContextData;

  const handlePageChange = (newPage) => {
    getRepositoriesList(activeQuery, newPage);
  };

  const totalItemsCount = itemsCount / 30;

  return totalItemsCount > 1 && (
  <Pagination
    activePage={activePage}
    totalItemsCount={itemsCount / 30}
    pageRangeDisplayed={10}
    onChange={handlePageChange}
    hideDisabled
    hideFirstLastPages
  />
  );
};

export default Paginator;
