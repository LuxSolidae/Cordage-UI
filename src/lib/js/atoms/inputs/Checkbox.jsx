// @flow
import * as React from "react";
import {default as RCheckbox} from 'rc-checkbox';

export type Props = {
  checked?: boolean,
  label: String,
  disabled: boolean
};

const onChange = () => {
  {onChange}
}

export const Checkbox = ({
    checked, label, disabled
  }: Props) => (
    <div>
      <label>
        <RCheckbox
          className='custom-checkbox'
          disabled={disabled}
        />
          {label}
      </label>
    </div>
  );

Checkbox.defaultProps = {
  checked: false
}

export default Checkbox;
