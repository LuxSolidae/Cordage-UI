// @flow
import * as React from "react";
import { Formik, Field } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";

import Input from "./Input";
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
        alert(JSON.stringify(errors, null, 2));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValidating
      }) => (
        <Form onSubmit={handleSubmit}>
          {/*
          <Input
            id="text"
            type="text"
            name="text"
            label="Text"
            placeholder="Enter some characters"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          <Input
            id="email"
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          <Input
            id="phone"
            type="phone"
            name="phone"
            label="Phone"
            placeholder="Enter your phone number."
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            id="password"
            type="password"
            name="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            id="textarea"
            type="textarea"
            name="textarea"
            label="Text Area"
            placeholder="Enter your message"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          */}
          
          <Field
            id="text-field"
            label="Text Input"
            name="text"
            type="text"
            placeholder="Enter some characters"
            component={TextField}
          />

          <Field
            name="email"
            type="email"
            placeholder="Enter your email"
            component={TextField}
          />

          <button 
            type="submit"
            onClick={() => console.log(isValidating)}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DoczForm;
