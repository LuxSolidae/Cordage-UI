// @flow
import * as React from 'react';
import ButtonGroupComponent from 'react-bootstrap/ButtonGroup';

export type Props = {
  as?: string,
  role?: string,
  size?: 'sm' | 'lg',
  toggle?: boolean,
  vertical?: boolean,
}

const ButtonGroup = (props: Props) => (
  <ButtonGroupComponent {...props} />
);

ButtonGroup.defaultProps = {
  as: undefined,
  role: undefined,
  size: undefined,
  toggle: undefined,
  vertical: undefined,
};

export default ButtonGroup;
