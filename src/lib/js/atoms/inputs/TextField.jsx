// @flow
import * as React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

const TextField = ({
  id,
  label,
  field,
  form: { touched, errors },
  value,
  disabled,
  readOnly,
  ...props 
}) => (
  <FormGroup controlId={id}>
    { label && <FormLabel>{label}</FormLabel> }

    <FormControl
      {...field}
      {...props}
      disabled={disabled}
      readOnly={readOnly}
    />

    <div className='input-error'>
      <ErrorMessage name={field.name} />
    </div>
  </FormGroup>
);

export default TextField;
