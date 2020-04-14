import React, { useState } from 'react';
import { fetchRepositoriesByName } from '../api/index';
// ContextProviders
import { LayoutContext } from '../contextProviders/LayoutContext';
//Components
import CardList from '../components/CardList'
import SearchForm from '../components/SearchForm'
//Styles
import './style.scss'

const MainPage =  () => {
  const [repositoriesList, setRepositoriesList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getRepositoriesList = async (query) => {
    setLoading(true);
    const list = await fetchRepositoriesByName(query);
    setLoading(false);
    setRepositoriesList(list);
  }

  return (
    <LayoutContext.Provider
      value={{
        getRepositoriesList,
        isLoading,
      }}
    >
        <div className="main-page">
        <h2>Wanna find some cool developers? Try in out!</h2>
      <SearchForm />
      {isLoading ? '11111111111' : <CardList {...repositoriesList} />}
      </div>
    </LayoutContext.Provider>
  );
}

export default MainPage;
