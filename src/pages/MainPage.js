import React, { useState } from 'react';
import { fetchRepositoriesByName } from '../api/index';
// ContextProviders
import { LayoutContext } from '../contextProviders/LayoutContext';
// Components
import CardList from '../components/CardList';
import SearchForm from '../components/SearchForm';
import Paginator from '../components/Paginator';
import Loader from '../components/Loader';
// Styles
import './style.scss';


const MainPage = () => {
  const [repositoriesInfo, setRepositoriesInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [activeQuery, setActiveQuery] = useState('');
  const [activePage, setActivePage] = useState(1);

  const getRepositoriesList = async (query, page) => {
    setLoading(true);
    const list = await fetchRepositoriesByName(query, page);
    setRepositoriesInfo(list);
    setActiveQuery(query);
    setActivePage(page);
    setLoading(false);
  };

  return (
    <LayoutContext.Provider
      value={{
        getRepositoriesList,
        isLoading,
        activeQuery,
      }}
    >
      <div className="main-page">
        <h2>Wanna find some cool developers? Try in out!</h2>
        <SearchForm />
        {isLoading ? <Loader />
          : (
            <>
              <CardList items={repositoriesInfo.items} />
              <Paginator itemsCount={repositoriesInfo.total_count} activePage={activePage} />
            </>
          )}
      </div>
    </LayoutContext.Provider>
  );
};

export default MainPage;
