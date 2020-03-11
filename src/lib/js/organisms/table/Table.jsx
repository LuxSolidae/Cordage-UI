// @flow
import * as React from 'react';
import BaseTable from 'react-base-table';

export type Props = {
  /** Prefix for table's inner `className`. Defaults to `BaseTable` */
  classPrefix?: string,
  /** Class name for the table */
  className?: string,
  /** Custom style for the table */
  style?: {},
  /** A collection of `Column` */
  children?: React.Node,

  /** Columns for the table */
  columns?: React.Node[],
  /** The data for the table.Defaults to `[]` */
  data?: [{ [key: string]: any }],
  /** The data be frozen to top, rowIndex is negative and started from -1. Defaults to `[]` */
  frozenData?: [any],

  /** The key field of each data item. Defaults to `id` */
  rowKey?: string | number,
  /** The width of the table */
  width: number,
  /** The height of the table, will be ignored if `maxHeight` is set */
  height: number,
  /** The max height of the table, the table's height will auto change when data changes, will turns to vertical scroll if reaches the max height. */
  maxHeight: number,

  /** The height of each table row. Defaults to `50` */
  rowHeight?: number,
  /** The height of the table header, set to 0 to hide the header, could be an array to render multi headers. Defaults to `50` */
  headerHeight?: number | arrayOf,
  /** The height of the table footer. Defaults to `0` */
  footerHeight?: number,
  /** Whether the width of the columns are fixed or flexible. Defaults to `false` */
  fixed?: boolean,
  /** Whether the table is disabled. Defaults to `false` */
  disabled?: boolean,

  /** Custom renderer on top of the table component */
  overlayRenderer: func | element,
  /** Custom renderer when the length of data is `0` */
  emptyRenderer?: func | element,
  
  /** Custom footer renderer, available only if footerHeight is larger then `0` */
  footerRenderer?: func | element,
  
  /** Custom header renderer. The renderer receives props { cells, columns, headerIndex } */
  headerRenderer?: ({ cells, columns, headerIndex }) => React.Node | React.Node
  
  /** Custom row renderer. The renderer receives props { isScrolling, cells, columns, rowData, rowIndex, depth } */
  rowRenderer?: ({ isScrolling, cells, columns, rowData, rowIndex, depth }) => React.Node | React.Node,
  
  /** Class name for the table header, could be a callback to return the class name The callback is of the shape of `({ columns, headerIndex }) => string` */
  headerClassName?: string | ({ columns, headerIndex }) => string,
  
  /** Class name for the table row, could be a callback to return the class name The callback is of the shape of `({ columns, rowData, rowIndex }) => string` */
  rowClassName?: string | ({ columns, rowData, rowIndex }) => string,

  /** Extra props applied to header element The handler is of the shape of `({ columns, headerIndex }) => object` */
  headerProps?: object | func

  /** Extra props applied to header cell element The handler is of the shape of `({ columns, column, columnIndex, headerIndex }) => object` */
  headerCellProps?: object | func
}