// @flow
import * as React from 'react';
import classnames from 'classnames';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';


type Props = {
  options?: {
    key: string | number, 
    label: string | number, 
    value: string | number, 
    decorator?: string,
  }[]
}


export const MultiSelect = (props: Props) => {
  const {
    label,
    options,
  } = props;


  return (
    <FormGroup>
      { label && <FormLabel>{ label }</FormLabel>}

      <Select
        options={options}
        classNamePrefix='multi-select'
      />
    </FormGroup>
  );
}

export default MultiSelect;