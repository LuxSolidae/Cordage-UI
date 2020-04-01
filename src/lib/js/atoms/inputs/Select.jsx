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
  field,
  form: { setFieldValue, setFieldTouched },
  options,
}: Props) => {
  // State
  const [activeOption, setActiveOption] = React.useState();

  React.useEffect(() => {
    const val = typy(field, 'value').safeString;
    if (val.length > 0) {
      const idx = _.findIndex(options, function (option) { return option.value.toLowerCase() === val.toLowerCase(); });
      if (idx >= 0) {
        setActiveOption(options[idx]);
      }
    }
  }, [field, options]);


  return (
    <FormGroup id={id} className={className}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl
        as="select"
        options={options}
        value={field.value}
        onBlur={() => setFieldTouched(field.name, true)}
        onChange={option => {
          setFieldTouched(field.name, true);
          setFieldValue(field.name, option.value);
        }}
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
        name={field.name}
      />
    </FormGroup>
  );
};

export default Select;

Select.defaultProps = {
  options: []
};
