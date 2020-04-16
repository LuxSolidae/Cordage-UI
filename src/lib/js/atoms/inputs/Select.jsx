// @flow
import * as React from "react";
import { default as RSelect} from "react-select";
import { FormGroup, FormLabel } from "react-bootstrap";
import { ErrorMessage } from "formik";

export type Option = {
  label: string,
  value: string | number
}

export type Props = {
  id: string,
  label?: string,
  className?: string,
  options?: {
    key: string | number,
    label: string,
    value: string | number
  }[]
}

export const Select = ({
  field,
  form: { setFieldValue },
  ...props
}: Props) => {
  const { 
    id, 
    label,
    className,
    options 
  } = props;

  return (
    <FormGroup>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}

      <RSelect
        {...field}
        {...props}
        id={id}
        options={options}
        className={className}
        value={options ? options.find((option) => option.value === field.value) : ""}
        onChange={(option) => setFieldValue(field.name, option.value)}
        classNamePrefix="multi-select"
      />

      <ErrorMessage component="span" className="input-error" name={field.name} />
    </FormGroup>
  );
};

Select.defaultProps = {
  label: '',
  className: '',
  options: []
};

export default Select;
