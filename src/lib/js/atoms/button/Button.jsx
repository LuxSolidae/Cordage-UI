// @flow
import * as React from 'react';
import ButtonComponent from 'react-bootstrap/Button';

export type Props = {
  active?: boolean,
  as?: 'input',
  block?: boolean,
  disabled?: boolean,
  size?: 'sm' | 'lg',
  type?: 'button' | 'submit' | 'reset',
  value?: string,
  variant?: |
    'primary' |
    'secondary' |
    'success' |
    'warning' |
    'danger' |
    'info' |
    'light' |
    'dark' |
    'outline-primary' |
    'outline-secondary' |
    'outline-success' |
    'outline-warning' |
    'outline-danger' |
    'outline-info' |
    'outline-light' |
    'outline-dark',
}

const Button = (props: Props) => {
  return (
    <ButtonComponent {...props} />
  )
}

Button.defaultProps = {
  active: undefined,
  as: undefined,
  block: undefined,
  disabled: undefined,
  size: undefined,
  type: undefined,
  value: undefined,
  variant: undefined,
}

export default Button;