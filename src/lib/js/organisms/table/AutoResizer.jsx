// @flow
import * as React from 'react';
import { AutoResizer as BaseAutoResizer } from 'react-base-table';

export type Props = {
  /** Class name for the component */
  className?: string,
  
  /** The width of the component, will be the container's width if not set */
  width: number,
  
  /** The height of the component, will be the container's width if not set */
  height: number,
  
  /** A callback function to render the children component. The handler is of the shape of `({ width, height }) => React.Node` */
  children: ({ width: number, height: number }) => React.Node,
  
  /** A callback function when the size of the table container changed if the width and height are not set. The handler is of the shape of `({ width, height }) => void` */
  onResize?: ({ width: number, height: number }) => void,
};

export const AutoResizer = (props: Props) => (
  <BaseAutoResizer {...props} />
);

export default AutoResizer;
