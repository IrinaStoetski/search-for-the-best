import React, {useContext, useState} from 'react';
// ContextProviders
import { LayoutContext } from '../../contextProviders/LayoutContext';
//Components
import Pagination from "react-js-pagination"
//Styles
import './style.scss';

const Paginator = ({itemsCount, activePage}) => {
    const layoutContextData = useContext(LayoutContext);
    const {activeQuery, getRepositoriesList} = layoutContextData;


    const handlePageChange = (newPage) => {
        getRepositoriesList(activeQuery, newPage);
    }

    const amountArray = itemsCount / 30;
 
    return (
        <Pagination
        activePage={activePage}
        totalItemsCount={itemsCount / 30}
        pageRangeDisplayed={10}
        onChange={handlePageChange}
        hideDisabled
        hideFirstLastPages	
         />
    )
}

export default Paginator;