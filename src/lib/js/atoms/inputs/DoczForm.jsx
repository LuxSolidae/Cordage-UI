// @flow
import * as React from "react";
import { Formik, Field } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";

import TextField from "./TextField";

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
  password: Yup.string()
    .min(5, "Password must be at least 5 characters."),
  textarea: Yup.string()
    .min(10, "Textarea must have at least 10 characters.")
    .max(100, "Textarea can't be longer than 100 characters")
    .required("Textarea is required.")
});

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

          <button type="submit" onClick={() => console.log(isValidating)}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DoczForm;
