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
      <Form.Check
        custom
        type='checkbox'
        id='custom-checkbox'
        label='Capturar versión en la creación del documento'
      />
</Form>
  );
};

export default Checkbox;
