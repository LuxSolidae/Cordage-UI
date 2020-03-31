// @flow
import * as React from "react";
import { Formik, Field } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";

import TextField from "./TextField";
import Select from './Select';

const Schema = Yup.object().shape({
  text: Yup.string()
    .min(3, "Text must have at least 3 characters.")
    .max(50, "Text can't be longer than 50 characters.")
    .required("Text is required."),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Email is required."),
  phone: Yup.string()
    .min(8, "Phone must have at least 8 numbers.")
    .max(12, "Phone can' be longer than 12 characters."),
});

const options = [
  { label: 'This is an option', value: 1 },
  { label: 'This is an option', value: 1 },
  { label: 'This is an option', value: 1 },
];


const DoczForm = () => {
  return (
    <Formik
      initialValues={{
        text: "",
        email: "",
        textarea: "",
        phone: "",
        password: ""
      }}
      validationSchema={Schema}
      onSubmit={(values, errors) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({
        handleSubmit,
        isValidating
      }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            id="text-field"
            label="Plain text"
            name="text"
            type="text"
            placeholder="Enter some characters"
            component={TextField}
          />

          <Field
            id="email-field"
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            component={TextField}
          />

          <Field
            id="phone-field"
            label="Phone"
            name="phone"
            type="phone"
            placeholder="Enter your phone"
            component={TextField}
          />

          <Field
            id='select-field'
            label='Select an option'
            name='select'
            options={options}
            component={Select}
          />

          <button type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DoczForm;
