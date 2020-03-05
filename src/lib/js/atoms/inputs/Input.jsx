// @flow
import * as React from 'react';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap/';

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
  label?: string,
  placeholder?: string,
  type?: $Keys<typeof InputTypesEnum>,

};


const Input = (props: Props) => {
  const {
    id,
    className,
    label,
    placeholder,
    type,

  } = props;

  return (
    <FormGroup controlId={id}>      
      { label && <FormLabel>{label}</FormLabel> }
      <FormControl
        placeholder={placeholder}
      />
    </FormGroup>
  );
};

Input.defaultProps ={
  id: undefined,
  className: undefined,
  label: undefined,
  placeholder: undefined,
  type: 'text',

}

export default Input;
