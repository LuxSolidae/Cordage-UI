import * as React from "react";
import { t as typy } from 'typy';
import _ from 'lodash';
import { Form, FormCheck } from "react-bootstrap";
import { ErrorMessage } from "formik";

export const Checkbox = () => {

  return(
    <div>
    <Form>
    {['checkbox', 'radio'].map((type) => (
      <div key={`default-${type}`} className="mb-3">
        <Form.Check
          type={type}
          id={`default-${type}`}
          label={`default ${type}`}
        />

        <Form.Check
          disabled
          type={type}
          label={`disabled ${type}`}
          id={`disabled-default-${type}`}
        />
      </div>
    ))}
  </Form>
    </div>
  );
}

export default Checkbox;
