// @flow
import * as React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';

import Input from './Input';


const Schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'This field must have at least 3 characters.')
    .max(50, 'This field can\'t be longer than 50 characters.')
    .required('This field is required.'),
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email is required.'),
});


const DoczForm = () => {
  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={Schema}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {(
        {
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }
      ) => (
        <Form onSubmit={handleSubmit}>
          <Input
            id='nameInput'
            type='text'
            name='name'
            label='Name'
            placeholder='Enter your name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            id='emailInput'
            type='email'
            name='email'
            label='Email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            id='text-box'
            type='textarea'
            name='text-box'
            label='Your message'
            placeholder='Enter your message'
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <button type='submit'>Submit</button>
        </Form>
      )}

    </Formik>
  );
}

export default DoczForm;