// @flow
import * as React from 'react';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Select, { components } from 'react-select';
import close from "../../../img/icons/close-white.svg";


const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <img src={close} alt='Close'></img>
    </components.MultiValueRemove>
  );
}

export const MultiSelect = (props: Props) => {
  const {
    label,
    options,
    defaultValue
  } = props;


  return (
    <FormGroup>
      { label && <FormLabel>{ label }</FormLabel>}

      <Select
        classNamePrefix='multi-select'
        options={options}
        formatOptionLabel={CustomOption}
        components={{MultiValueLabel, MultiValueRemove}}
        defaultValue={defaultValue}
        isMulti
      />
    </FormGroup>
  );
}

const CustomOption = ({ value, label, auxText, img }) => (
  <div className='custom-option'>
    { img && <img className='custom-option__img' src={img} alt={label}/> }

    <span className='custom-option__label'>{ label }</span>
    { auxText && <span className='custom-option__aux-text'>{ auxText }</span> }
  </div>
);

const MultiValueLabel = (props) => {
  return (
    <components.MultiValueLabel {...props}>
      { props.data.label }
    </components.MultiValueLabel>
  );
}

export default MultiSelect;