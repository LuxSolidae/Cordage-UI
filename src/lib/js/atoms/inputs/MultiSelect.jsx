// @flow
import * as React from "react";
import { FormGroup, FormLabel } from "react-bootstrap";
import Select, { components } from "react-select";
import close from "../../../img/icons/close-white.svg";

export const MultiSelect = (props) => {
  const { label, options, defaultValue } = props;

  return (
    <FormGroup>
      {label && <FormLabel>{label}</FormLabel>}

      <Select
        classNamePrefix="multi-select"
        options={options}
        components={{ Option: Option, MultiValueLabel, MultiValueRemove }}
        defaultValue={defaultValue}
        isMulti
        menuIsOpen={true}
      />
    </FormGroup>
  );
};

const Option = (props) => {
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

export default MultiSelect;
