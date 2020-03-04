// @flow
import * as React from 'react';
import FormControl from 'react-bootstrap/FormControl';

export type Props = {
  property?: string,
}

const Input = (props: Props) => (
  <FormControl
    placeholder="Username"
  />
);

export default Input;
