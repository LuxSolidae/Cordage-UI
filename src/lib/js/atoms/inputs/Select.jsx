// @flow
import * as React from 'react';
import classnames from 'classnames';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { ErrorMessage } from 'formik';


const Select = (props) => {
  const {
    className,
    id,
    label,
    field,
    form: { touched, errors },
    options: [],
  } = props;

  return(
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
}

export default Select;