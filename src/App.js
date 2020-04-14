import React, { useState } from 'react';
import { fetchRepositoriesByName } from './api/index';
// ContextProviders
import { LayoutContext } from './contextProviders/LayoutContext';
//Components
import CardList from './components/CardList'
import SearchForm from './components/SearchForm'
//Styles
import './styles/global-styles.scss';

function App() {
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
      <SearchForm />
      {isLoading ? '11111111111' : <CardList {...repositoriesList} />}
    </LayoutContext.Provider>
  );
}

export default App;
