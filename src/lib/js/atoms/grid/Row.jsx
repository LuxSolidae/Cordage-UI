// @flow
import * as React from 'react';
import classnames from 'classnames';

export type Props = {
  className?: string,
  children: React.Node,
};

const Row = ({ className, children, ...props }: Props) => (
  <div className={classnames('row', className)} {...props}>
    { children }
  </div>
);

Row.defaultProps = {
  className: undefined,
};

export default Row;