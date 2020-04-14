import React from 'react';
import Spinner from '../Spinner';
import './style.scss';

type Props = {
    type?: 'primary',
    customClass?: string,
    buttonType?: 'reset' | 'button' | 'submit',
    disabled?: boolean,
    customStyles?: string,
    loading?: boolean,
    children?: React.Node,
    onClick?: Function,
  };

const Button = ({
    type = 'primary',
    customClass = '',
    buttonType='submit',
    ...props
}: Props) => {
  const componentClassName = `btn ${type} ${customClass}`
    return (
        <button className={componentClassName}
          type={buttonType}
          disabled={props.disabled}
          onClick={props.onClick}>
          {props.loading ? <Spinner /> : props.children}
        </button>
     )
}


export default Button