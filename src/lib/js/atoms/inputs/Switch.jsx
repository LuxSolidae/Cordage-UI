// @flow
import * as React from "react";
import { default as RSwitch } from "react-switch";

export type Props = {
  checked?: boolean,
};

export const Switch = (props: Props) => {
  const {
    checked,
    field,
    form,
  } = props;

  const [state, setState] = React.useState(checked);

  const handleChange = () => {
    if(form) {
      setState(!state);
      form.setFieldValue(field.name, true);
      console.log('formik');
    } else {
      setState(!state);
      console.log('no formik', state);
    }    
  }

  return (
    <div>
      <RSwitch
        checked={state}
        onChange={handleChange}
      />
    </div>
  );
};

Switch.defaultProps = {
  checked: false,
};

export default Switch;
