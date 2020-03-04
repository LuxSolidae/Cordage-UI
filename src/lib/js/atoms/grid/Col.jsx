// @flow
import * as React from 'react';
import classnames from 'classnames';

export type Props = {
  /** Number of columns in mobile devices [1 - 12] */
  xs?: number,
  /** Number of columns in horizontal mobile devices [1 - 12] */
  sm?: number,
  /** Number of columns in tablet [1 - 12] */
  md?: number,
  /** Number of columns in desktop [1 - 12] */
  lg?: number,
  /** Number of columns in large desktop [1 - 12] */
  xl?: number,
  /** Any extra class names */
  className?: string,
  children: React.Node,
};

const Col = ({ xs, sm, md, lg, xl, className, children, ...props }: Props) => (
  <div
    className={classnames('col', {
      col: !xs && !sm && !md && !lg && !xl,
      [`col-${xs || 0}`]: xs,
      [`col-sm-${sm || 0}`]: sm,
      [`col-md-${md || 0}`]: md,
      [`col-lg-${lg || 0}`]: lg,
      [`col-xl-${xl || 0}`]: xl,
    }, className)}
    {...props}
  >
    { children }
  </div>
);

Col.defaultProps = {
  className: undefined,
};

export default Col;