// @flow
import * as React from "react";
import { t as typy } from 'typy';
import _ from 'lodash';
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { ErrorMessage } from "formik";

export type Option = {
  key: number,
  label: string | number,
  value: string | number
};

type Props = {
  className?: string,
  id: string,
  label?: string,
  field: any,
  form: any,
  options?: {
    key: number,
    label: string | number,
    value: string | number
  }[]
};

const Select = ({
  className,
  id,
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
}: Props) => {
  return (
    <FormGroup id={id} className={className}>

      { label && <FormLabel>{label}</FormLabel> }
      
      <FormControl
        as="select"
        options={options}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        name={name}
      >
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </FormControl>

      <ErrorMessage
        component="span"
        className="input-error"
        name={name}
      />
    </FormGroup>
  );
};

export default Select;

Select.defaultProps = {
  options: []
};
