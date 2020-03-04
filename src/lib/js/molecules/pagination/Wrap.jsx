// @flow
import * as React from 'react';
import PaginationComponent from 'react-bootstrap/Pagination';

export type Props = {
  size?: 'sm' | 'lg'
}


const Wrap = (props: Props) => (
  <PaginationComponent {...props} />
);

Wrap.defaultProps = {
  as: undefined,
  pill: undefined,
  variant: undefined,
}

export default Wrap;