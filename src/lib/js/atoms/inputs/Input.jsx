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
    icon,
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

  let component;

  switch(type) {
    case 'textarea':
      component = (
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
      component = (
        <FormControl
          className={className}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          onChange={onChange}
          onBlur={onBlur}
          icon={icon}
        />
      );
      break;
  }

  return (
    <FormGroup controlId={id} className={classnames({ 'with-decorator': icon }) }>      
      { label && <FormLabel>{label}</FormLabel> }      

      { component }
      
      <i className="fab fa-500px input-icon"></i>
      {icon}

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