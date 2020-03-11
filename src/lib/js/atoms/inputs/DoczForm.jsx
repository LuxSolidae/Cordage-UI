// @flow
import * as React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';

import Input from './Input';


const Schema = Yup.object().shape({
  text: Yup.string()
    .min(3, 'Text must have at least 3 characters.')
    .max(50, 'Text can\'t be longer than 50 characters.')
    .required('Text is required.'),
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email is required.'),
  textarea: Yup.string()
    .min(10, 'Textarea must have at least 10 characters.')
    .max(100, 'Textarea can\'t be longer than 100 characters')
    .required('Textarea is required.'),
});


const DoczForm = () => {
  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={Schema}
      onSubmit={(values, errors) => {
        alert(JSON.stringify(values, null, 2));
        alert(JSON.stringify(errors, null, 2));
      }}
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
            id='text'
            type='text'
            name='text'
            label='Text'
            placeholder='Enter some characters'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          <Input
            id='email'
            type='email'
            name='email'
            label='Email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          <Input
            id='textarea'
            type='textarea'
            name='textarea'
            label='Text Area'
            placeholder='Enter your message'
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          <button type='submit'>Submit</button>
        </Form>
      )}

    </Formik>
  );
}

export default DoczForm;