// @flow
import * as React from 'react';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Select from 'react-select';


const CustomOption = ({ value, label, auxText, img }) => (
  <div className='custom-option'>
    { img && <img className='custom-option__img' src={img} alt={label}/> }

    <span className='custom-option__label'>{ label }</span>
    { auxText && <span className='custom-option__aux-text'>{ auxText }</span> }
  </div>
);

const CustomLabel = (props) => {
  <components.SingleValue {...props}>
    { props.data.label }
  </components.SingleValue>
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
        menuIsOpen={true}
        formatOptionLabel={CustomOption}
        classNamePrefix='multi-select'
        isMulti
      />
    </FormGroup>
  );
}

export default MultiSelect;