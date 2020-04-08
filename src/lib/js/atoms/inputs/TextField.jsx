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


export const TextField = (props: Props) => {
  const {
    id,
    label,
    type,
    field,
    form: { touched, errors },
    disabled,
    readOnly,
    className
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
    <FormGroup id={id}>
      { label && <FormLabel>{label}</FormLabel> }

      <div 
        className={classnames(
          'input-wrapper',
          { with_icon: icon},
          { field_error: touched[field.name] && errors[field.name] })
        }
      >
        <FormControl
          className={className}
          disabled={disabled}
          readOnly={readOnly}
          {...field}
          {...props}
        />
        { icon && <i className={classnames('input-icon fas', icon)}></i>}
      </div>

      <ErrorMessage
        component="span"
        className="input-error"
        name={field.name}
      />
    </FormGroup>
  );
}

export default TextField;
