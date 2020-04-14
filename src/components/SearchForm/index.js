import React, {useEffect, useContext} from 'react';
import { useFormik } from 'formik';
// ContextProviders
import { LayoutContext } from '../../contextProviders/LayoutContext';
//Components
import Input from '../Input';
import Button from '../Button'
//Styles
import './style.scss';

const SearchForm = () => {
    const layoutContextData = useContext(LayoutContext);
    const {isLoading, getRepositoriesList} = layoutContextData;
    const formik = useFormik({
        initialValues: {
            userName: '',
        },
        onSubmit: values => {
            getRepositoriesList(values.userName);  
        },
    });
    return (
        <form
            className="search-form"
            onSubmit={formik.handleSubmit}
        >
            <Input
                title="Type a name"
                formik={formik}
                formikKey="userName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <Button
                buttonType="submit"
                loading={isLoading}
            >
                Search
            </Button>
        </form>
    )
}

export default SearchForm