// @flow
import React, { useContext } from 'react';
import { useFormik } from 'formik';
// ContextProviders
import { LayoutContext } from '../../contextProviders/LayoutContext';
// Components
import Input from '../Input';
import Button from '../Button';
// Styles
import './style.scss';

const SearchForm = () => {
  const layoutContextData = useContext(LayoutContext);
  const { isLoading, getRepositoriesList } = layoutContextData;
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      getRepositoriesList(values.name);
    },
  });
  return (
    <form
      className="search-form"
      onSubmit={formik.handleSubmit}
    >
      <Input
        title="Type a name and find your star"
        formik={formik}
        formikKey="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Button
        buttonType="submit"
        loading={isLoading}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
