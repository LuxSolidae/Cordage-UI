// @flow
import * as React from 'react';
import classnames from 'classnames';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

export type Option = {
  key: number,
  label: string | number,
  valuer: string | number,
}

type Props = {
  className?: string,
  id: number,
  label?: string,
  field: any,
  form: any,
  options: {
    key: number,
    label: string | number,
    valuer: string | number,
  }[],
}

const Select = ({
  className,
  id,
  label,
  field,
  form: { touched, errors },
  options: [],
}: Props) => (
    <FormGroup id={id} className={className}>
      { label && <FormLabel>{label}</FormLabel> }
      
      <FormControl as='select'>
        <option>1</option>
        <option>2</option>
      </FormControl>

      <ErrorMessage
        component="span"
        className="input-error"
        name={field.name} 
      />
    </FormGroup>
  );

export default Select;