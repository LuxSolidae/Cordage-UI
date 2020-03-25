// @flow
import * as React from 'react';
import { FormControl } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

const NewInput = ({ field, form: { touched, errors }, disabled, ...props }) => (
  <>
    <FormControl
      {...field}
      {...props}
      disabled={disabled}
      clear={disabled}
    />
    <ErrorMessage name={field.name} />
  </>
);
export default NewInput;
