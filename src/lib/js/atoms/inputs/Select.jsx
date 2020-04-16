// @flow
import * as React from "react";
import Select from "react-select";
import { FormGroup, FormLabel } from "react-bootstrap";
import { ErrorMessage } from "formik";


export const NewSelect = ({
  field,
  form: { setFieldValue },
  ...props
}) => {
  const { 
    id, 
    label,
    className,
    options 
  } = props;

  return (
    <FormGroup>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}

      <Select
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

export default NewSelect;
