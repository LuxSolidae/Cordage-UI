// @flow
import * as React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap/';

const InputTypesEnum = {
  date: 'date',
  email: 'email',
  password: 'password',
  phone: 'phone',
  text: 'text',
  textarea: 'textarea',
};

export type Props = {
  id: string,
  className?: string,
  type?: $Keys<typeof InputTypesEnum>,
  label?: string,

};

const Input = (props: Props) => (
  <FormControl
    placeholder="Username"
  />
);

export default Input;
