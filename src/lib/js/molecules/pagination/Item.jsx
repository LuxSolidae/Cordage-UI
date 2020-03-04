// @flow
import * as React from 'react';
import PageItem from 'react-bootstrap/PageItem';

export type Props = {
  /** Styles PageItem as active, and renders a <span> instead of an <a> */
  active?: boolean,
  /** An accessible label indicating the active state */
  activeLabel?: string,
  /** Disables the PageItem */
  disabled?: boolean,
}


const Item = (props: Props) => (
  <PageItem {...props} />
);

Item.defaultProps = {
  active: undefined,
  activeLabel: undefined,
  disabled: undefined,
}

export default Item;