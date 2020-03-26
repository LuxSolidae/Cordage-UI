// @flow
import * as React from 'react';
import classnames from 'classnames';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { ErrorMessage } from 'formik';


export type Props = {
  id: string,
  label?: string,
  type?: string,
  field?: object,
  form?: string,
  value?: string, 
  disabled?: Boolean,
  readOnly?: Boolean,
};

{/*
const TextField = ({
  id,
  label,
  type,
  field,
  form: { touched, errors },
  value,
  disabled,
  readOnly,
  ...props 
}) => (
  <FormGroup controlId={id}>
    { label && <FormLabel>{label}</FormLabel> }

    <div className={classnames('input-wrapper', { with_icon: icon})}>
      <FormControl
        {...field}
        {...props}
        disabled={disabled}
        readOnly={readOnly}
      />
    </div>

    <ErrorMessage component="span" className="input-error" name={field.name} />
  </FormGroup>
);

export default TextField;
*/}

const TextField = (props) => {
  const {
    id,
    label,
    type,
    field,
    form: { touched, errors },
    value,
    disabled,
    readOnly,
    className,
  } = props;

  let icon;
  let iconTypes = {
    email: 'fa-envelope',
    password: 'fa-lock',
    phone: 'fa-phone',
  }

  switch(type) {
    case 'email':
      icon = iconTypes.email;
      break;
    
    case 'password':
      icon = iconTypes.password;
      break;

    case 'phone':
      icon = iconTypes.phone;
      break;
    
    default:
      icon = null;
      break;
  }

  return (
    <FormGroup controlId={id}>
      { label && <FormLabel>{label}</FormLabel> }

      <div className={classnames('input-wrapper', { with_icon: icon})}>
        <FormControl
          {...field}
          {...props}
          disabled={disabled}
          readOnly={readOnly}
        />
        { icon && <i className={classnames('input-icon fas', icon)}></i>}
      </div>

      <ErrorMessage component="span" className="input-error" name={field.name} />
    </FormGroup>
  );
}

export default TextField;