// @flow
import * as React from 'react';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const InputTypesEnum = {
  date: 'date',
  email: 'email',
  password: 'password',
  phone: 'phone',
  text: 'text',
  textarea: 'textarea'
};

export type Props = {
  id: string,
  className?: string,
  label?: string,
  placeholder?: string,
  type?: $Keys<typeof InputTypesEnum>,

  required?: boolean,
  readOnly?: boolean,

};


const Input = (props: Props) => {
  const {
    id,
    className,
    label,
    placeholder,
    type,

    required,
    readOnly
  } = props;

  return (
    <FormGroup controlId={id}>      
      { label && <FormLabel>{label}</FormLabel> }

      <FormControl
        className={className}
        type={type}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
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

  required: false,
  readOnly: false,

}

export default Input;
