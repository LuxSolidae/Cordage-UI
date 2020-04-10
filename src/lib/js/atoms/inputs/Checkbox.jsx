import * as React from "react";
import { t as typy } from 'typy';
import _ from 'lodash';
import { Form, FormCheck } from "react-bootstrap";
import { ErrorMessage } from "formik";

export type Props = {
  isChecked: Boolean,
  changeHandler: Function
}

export const Checkbox = ({
  isChecked,
  changeHandler
}: Props) => {


  return (
    <Form>
  {['checkbox', 'radio'].map((type) => (
    <div key={`custom-${type}`} className="mb-3">
      <Form.Check
        custom
        type={type}
        id={`custom-${type}`}
        label={`Check this custom ${type}`}
      />

      <Form.Check
        custom
        disabled
        type={type}
        label={`disabled ${type}`}
        id={`disabled-custom-${type}`}
      />
    </div>
  ))}
</Form>
  );
};

export default Checkbox;
