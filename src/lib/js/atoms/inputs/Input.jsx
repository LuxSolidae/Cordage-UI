// @flow
import * as React from 'react';
import classnames from 'classnames';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { ErrorMessage } from 'formik';


const InputTypesEnum = {
  date: 'date',
  email: 'email',
  file: 'file',
  image: 'image',
  password: 'password',
  phone: 'phone',
  text: 'text',
  textarea: 'textarea'
};

export type Props = {
  id: string,
  icon?: string,
  className?: string,
  label?: string,
  placeholder?: string,
  type?: $Keys<typeof InputTypesEnum>,
  required?: boolean,
  readOnly?: boolean,
  name?: null,
  onChange?: Function,
  onBlur?: Function,
};

const Input = (props: Props) => {
  const {
    id,
    className,
    label,
    placeholder,
    type,
    required,
    readOnly,
    name,
    onChange,
    onBlur
  } = props;

  let icon;
  let fieldComponent;

  const iconTypes = {
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

  switch(type) {
    case 'textarea':
      fieldComponent = (
        <FormControl
          className={className}
          name={name}
          as='textarea'
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          onChange={onChange}
          onBlur={onBlur}
          icon={type}
        />
      );
      break;
    
    default:
      fieldComponent = (
        <FormControl
          className={className}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          onChange={onChange}
          onBlur={onBlur}
          icon={type}
        />
      );
      break;
  }

  return (
    <FormGroup controlId={id}>      
      { label && <FormLabel>{label}</FormLabel> }

      <div className={classnames('input-wrapper', { with_icon: icon})}>
        { fieldComponent }
        { icon && <i className={classnames('input-icon fas', icon)}></i>}
      </div>

      <div className='input-error'>
        <ErrorMessage name={name} />
      </div>
    </FormGroup>
  );
};


Input.defaultProps ={
  id: undefined,
  icon: '',
  className: undefined,
  label: undefined,
  placeholder: undefined,
  type: 'text',
  required: false,
  readOnly: false,
}

export default Input;