// @flow
import * as React from 'react';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Select, { components } from 'react-select';


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
        components={{MultiValueLabel}}
        defaultValue={defaultValue}
        isMulti
      />
    </FormGroup>
  );
}

export default MultiSelect;