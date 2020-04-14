import React from 'react';
import Spinner from '../Spinner';
import './style.scss';

type Props = {
    type?: 'primary',
    customClass?: string,
    buttonType?: 'reset' | 'button' | 'submit',
    disabled?: boolean,
    loading?: boolean,
    children?: React.Node,
    onClick?: Function,
  };

const Button = ({
  type = 'primary',
  customClass = '',
  buttonType = 'submit',
  disabled,
  onClick,
  loading,
  children,
}: Props) => {
  const componentClassName = `btn ${type} ${customClass}`;
  return (
    <button
      className={componentClassName}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};


export default Button;
