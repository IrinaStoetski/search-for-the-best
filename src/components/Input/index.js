import React from 'react';
import './style.scss';

type Props = {
    type?: 'primary',
    customClass?: String,
    inputType?: String,
    value: String,
    onChange: Function,
    placeholder: String,
    title?: String,
};

const Input = ({
  formik,
  formikKey,
  type = 'primary',
  customClass = '',
  inputType = 'text',
  value = '',
  onChange,
  placeholder,
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
        <div className="c-error">{formik.errors[formikKey]}</div>
      ) : null}
    </label>
  );
};


export default Input;
