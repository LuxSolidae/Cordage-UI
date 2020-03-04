// @flow
import * as React from 'react';
import ButtonComponent from 'react-bootstrap/Button';

export type Props = {
  /** Manually set the visual state of the button to :active */
  active?: boolean,
  /** You can use a custom element type for this component */
  as?: 'input',
  /** Spans the full width of the Button parent */
  block?: boolean,
  /** Use if this button is just a link */
  href?: string,
  /** Disables the Button, preventing mouse events,
   *  even if the underlying component is an <a> element */
  disabled?: boolean,
  /** Specifies a large or small button */
  size?: 'sm' | 'lg',
  /** Defines HTML button type attribute */
  type?: 'button' | 'submit' | 'reset' | null,
  /** One or more button variant combinations */
  variant?: 'primary' |
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

const Button = (props: Props) => (
  <ButtonComponent {...props} />
);

Button.defaultProps = {
  active: undefined,
  as: undefined,
  block: undefined,
  disabled: undefined,
  href: undefined,
  size: undefined,
  type: undefined,
  variant: undefined,
};

export default Button;