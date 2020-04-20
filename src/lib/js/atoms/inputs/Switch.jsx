// @flow
import * as React from "react";
import { FormGroup, ErrorMessage } from 'react-bootstrap';
import { default as RSwitch } from "react-switch";

export type Props = {
  checked?: boolean,
  className?: string,
  field?: object,
  form?: object,
};

export const Switch = (props: Props) => {
  const {
    checked,
    className,
    field,
    form
  } = props;

  const [state, setState] = React.useState(checked);

  const handleChange = () => {
    if (form) {
      setState(!state);
      form.setFieldValue(field.name, !state);
    } else setState(!state);
  };

  return (
    <FormGroup>
      <RSwitch
        checked={state}
        className={className}
        onChange={handleChange}
      />

      {form && <div className="input-error">{form.errors[field.name]}</div>}
    </FormGroup>
  );
};

Switch.defaultProps = {
  checked: false,
  className: undefined,
  field: undefined,
  form: undefined,
};

export default Switch;
