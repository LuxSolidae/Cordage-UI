import React from "react";
import { Field } from "formik";

export const Checkbox = ({ errors, status, touched }) => {
  return (
    <div className="form-group form-check">
      <Field type="checkbox" name="acceptTerms" id="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
      <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
      <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
    </div>
  );
}

export default Checkbox;

