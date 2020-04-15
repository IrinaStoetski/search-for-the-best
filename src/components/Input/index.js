// @flow
import React from 'react';
// Styles
import './style.scss';

type Props = {
    formik: Object,
    formikKey: string,
    value: string,
    onChange: Function,
    type?: string,
    customClass?: string,
    inputType?: string,
    placeholder?: string,
    title?: string,

};

const Input = ({
  formik,
  formikKey,
  value,
  onChange,
  type = 'primary',
  customClass = '',
  inputType = 'text',
  placeholder = '',
  title,
}: Props) => {
  const componentClassName = `input ${type} ${customClass}`;

  return (
    <label>
      {title}
      <input
        type={inputType}
        placeholder={placeholder}
        className={componentClassName}
        onChange={onChange}
        value={value}
        name={formikKey}
      />
      {formik.touched[formikKey] && formik.errors[formikKey] ? (
        <div>{formik.errors[formikKey]}</div>
      ) : null}
    </label>
  );
};


export default Input;
