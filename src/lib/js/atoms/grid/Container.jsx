// @flow
import * as React from 'react';
import classnames from 'classnames';

export type Props = {
  className?: string,
  children: React.Node,
};

const Container = ({ className, children, ...props }: Props) => (
  <div className={classnames('container', className)} {...props}>
    { children }
  </div>
);

Container.defaultProps = {
  className: undefined,
};

export default Container;