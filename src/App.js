import React, { useState } from 'react';
import { fetchRepositoriesByName } from './api/index';
// ContextProviders
import { LayoutContext } from './contextProviders/LayoutContext';
//Components
import MainPage from './pages/MainPage'
//Styles
import './styles/global-styles.scss';

function App() {
 
  return (
    <MainPage />
  );
}

export default App;
