// @flow
import * as React from "react";
import { FormGroup, FormLabel } from "react-bootstrap";
import Select, { components } from "react-select";
import { ErrorMessage } from "formik";
import close from "../../../img/icons/close-white.svg";

export type Option = {
  key: string | number,
  label: string,
  value: string | number,
  auxTex?: string | number,
  img?: string
}

export type Props = {
  id: string,
  name: string,
  touched: boolean,
  error: any,
  value: any,
  label?: string,
  className?: string,
  defaultValue?: string | number,
  options?: {
    key: string | number,
    label: string,
    value: string | number,
    auxTex?: string | number,
    img?: string
  }[]
}

export const MultiSelect = (props: Props) => {
  const handleChange = (value) => {
    const { onChange, name } = props;
    onChange(name, value);
  };

  const handleBlur = () => {
    const { onBlur, name } = props;
    onBlur(name, true);
  };

  const {
    id,
    name,
    options,
    touched,
    error,
    value,
    label,
    className,
    defaultValue,
  } = props;

  return (
    <FormGroup>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}

      <Select
        id={id}
        name={name}
        options={options}
        touched={touched}
        error={error}
        value={value}
        className={className}
        defaultValue={defaultValue}
        onBlur={handleBlur}
        onChange={handleChange}
        classNamePrefix="multi-select"
        components={{ Option: CustomOption, MultiValueLabel, MultiValueRemove }}
        isMulti
      />

      <ErrorMessage component="span" className="input-error" name={name} />
    </FormGroup>
  );
};

const CustomOption = (props) => {
  return (
    <components.Option {...props} className="custom-option">
      {props.data.img && (
        <img
          className="custom-option__img"
          src={props.data.img}
          alt={props.data.label}
        />
      )}
      <span className="custom-option__label">{props.data.label}</span>
      {props.data.auxText && (
        <span className="custom-option__aux-text">{props.data.auxText}</span>
      )}
    </components.Option>
  );
};

const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <img src={close} alt="Close"></img>
    </components.MultiValueRemove>
  );
};

const MultiValueLabel = (props) => {
  return (
    <components.MultiValueLabel {...props}>
      {props.data.label}
    </components.MultiValueLabel>
  );
};

MultiSelect.defaultProps = {
  label: undefined,
  className: '',
  defaultValue: undefined,
  options: []
}

export default MultiSelect;
