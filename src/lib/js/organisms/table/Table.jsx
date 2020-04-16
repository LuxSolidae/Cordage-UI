// @flow
import * as React from 'react';
import BaseTable from 'react-base-table';
import Column from './Column';

export type RowData = {
  id: string,
  parentId?: string,
  [columnKey: string]: string,
}

export type Props = {
  /** Prefix for table's inner `className`. Defaults to `BaseTable` */
  classPrefix?: string,
  
  /** Class name for the table */
  className?: string,

  /** Custom style for the table */
  style?: {},

  /** A collection of `Column` */
  children?: React.ChildrenArray<React.Element<typeof Column>>,

  /** Columns for the table. This can be used instead of `children`. */
  columns?: React.Element<typeof Column>[],

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
  headerHeight?: number | number[],

  /** The height of the table footer. Defaults to `0` */
  footerHeight?: number,

  /** Whether the width of the columns are fixed or flexible. If you want the widths of your columns are respected, when they exceed the full size of the table, please set it to `true`. Defaults to `false` */
  fixed?: boolean,

  /** Whether the table is disabled. Defaults to `false` */
  disabled?: boolean,

  /** Custom renderer on top of the table component */
  overlayRenderer?: React.Node | () => React.Node,

  /** Custom renderer when the length of data is `0` */
  emptyRenderer?: React.Node | () => React.Node,

  /** Custom footer renderer, available only if footerHeight is larger then `0` */
  footerRenderer?:  React.Node | () => React.Node,

  /** Custom header renderer. The renderer receives props { cells, columns, headerIndex } */
  headerRenderer?: React.Node |
    ({ cells: React.Node[], columns: React.Element<typeof Column>[], headerIndex: number }) => React.Node,
  
  /** Custom row renderer. The renderer receives props { isScrolling, cells, columns, rowData, rowIndex, depth } */
  rowRenderer?: React.Node | ({ isScrolling: boolean, cells: React.Node[], columns: React.Element<typeof Column>[], rowData: RowData, rowIndex: number, depth: number }) => React.Node,
  
  /** Class name for the table header, could be a callback to return the class name. The callback is of the shape of `({ columns, headerIndex }) => string` */
  headerClassName?: string | ({ columns: React.Element<typeof Column>[], headerIndex: number }) => string,
  
  /** Class name for the table row, could be a callback to return the class name. The callback is of the shape of `({ columns, rowData, rowIndex }) => string` */
  rowClassName?: string | ({ columns: React.Element<typeof Column>[], rowData: RowData, rowIndex: number }) => string,

  /** Extra props applied to header element. The handler is of the shape of `({ columns, headerIndex }) => object` */
  headerProps?: {} | ({ columns: React.Element<typeof Column>[], headerIndex: number }) => {},

  /** Extra props applied to header cell element. The handler is of the shape of `({ columns, column, columnIndex, headerIndex }) => object` */
  headerCellProps?: {} | ({ columns: React.Element<typeof Column>[], column: React.Element<typeof Column>, columnIndex: number, headerIndex: number }) => {},

  /** Extra props applied to row element. The handler is of the shape of `({ columns, rowData, rowIndex }) => object` */
  rowProps?: {} | ({ columns: React.Element<typeof Column>[], rowData: RowData, rowIndex: number }) => {},

  /** Extra props applied to row cell element. The handler is of the shape of `({ columns, column, columnIndex, rowData, rowIndex }) => object` */
  cellProps?: {} | ({ columns: React.Element<typeof Column>[], column: React.Element<typeof Column>, columnIndex: number, rowData: RowData, rowIndex: number }) => {},

  /** Extra props applied to ExpandIcon component. The handler is of the shape of `({ rowData, rowIndex, depth, expandable, expanded }) => object` */
  expandIconProps?: {} | ({ rowData: RowData, rowIndex: number, depth: number, expandable: boolean, expanded: boolean }) => {},

  /** The key for the expand column which render the expand icon if the data is a tree */
  expandColumnKey?: string,

  /** Default expanded row keys when initialize the table */
  defaultExpandedRowKeys?: string[],

  /** Controlled expanded row keys */
  expandedRowKeys?: string[],

  /** A callback function when expand or collapse a tree node. The handler is of the shape of `({ expanded, rowData, rowIndex, rowKey }) => *` */
  onRowExpand?: ({ expanded: boolean, rowData: RowData, rowIndex: number, rowKey: string }) => void,

  /** A callback function when the expanded row keys changed The handler is of the shape of `(expandedRowKeys) => void` */
  onExpandedRowsChange?: (expandedRowKeys: string[]) => void,
  
  /** The sort state for the table, will be ignored if sortState is set */
  sortByshape: {},

  /** Multiple columns sort state for the table */
  sortState: {},
};

export const Table = (props: Props) => (
  <BaseTable {...props} />
);

export default Table;