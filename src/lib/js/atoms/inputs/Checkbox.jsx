import * as React from "react";
import { t as typy } from 'typy';
import { ErrorMessage } from "formik";

export type Props = {
  isChecked: Boolean,
  changeHandler: Function,
  label: String
}

export const Checkbox = ({
  isChecked,
  changeHandler,
  label
}: Props) => {
  return (
    <Form>
      <Form.Check
        custom
        type='checkbox'
        id='custom-checkbox'
        label={label}
        checked={isChecked}
      />
    </Form>
  );
};

export default Checkbox;
