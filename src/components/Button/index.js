// @flow
import * as React from 'react';
// Components
import Spinner from '../Spinner';
// Styles
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
  disabled = false,
  onClick,
  loading = false,
  children,
}: Props) => {
  const componentClassName = `btn ${type} ${customClass}`;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={componentClassName}
      type={buttonType}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};


export default Button;
