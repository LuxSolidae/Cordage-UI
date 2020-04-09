// @flow
import * as React from 'react';
import classnames from 'classnames';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

export const MultiSelect = (props) => {
  const {
    id,
    label,
  } = props;


  return (
    <FormGroup id={id}>
      { label && <FormLabel>{ label }</FormLabel>}

      <h1>This is a MultiSelect</h1>
    </FormGroup>
  );
}

export default MultiSelect;