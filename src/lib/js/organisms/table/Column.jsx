// @flow
import * as React from 'react';
import { Column as BaseColumn } from 'react-base-table';

export type RowData = {
  id: string,
  parentId?: string,
  [columnKey: string]: string,
}

type Props = {
  /** Class name for the column cell, could be a callback to return the class name. The callback is of the shape of `({ cellData, columns, column, columnIndex, rowData, rowIndex }) => string` */
  className?: string | ({ cellData: any, columns: React.Element<typeof Column>[], column: React.Element<typeof Column>, columnIndex: number, rowData: RowData, rowIndex: number }) => string,
  
  /** Class name for the column header, could be a callback to return the class name. The callback is of the shape of `({ columns, column, columnIndex, headerIndex }) => string` */
  headerClassName?: string | ({ columns: React.Element<typeof Column>[], column: React.Element<typeof Column>, columnIndex: number, headerIndex: number }) => string,
  
  /** Custom style for the column cell, including the header cells */
  style?: {},

  /** The key is always required, it must be unique for each Column */
  key: string,
  
  /** Title for the column header */
  title: string,
  
  /** Data key for the column cell, could be "a.b.c" */
  dataKey: string,
  
  /** Custom cell data getter The handler is of the shape of ({ columns, column, columnIndex, rowData, rowIndex }) => React.Node */
  dataGetter?: ({ columns: React.Element<typeof Column>[], column: React.Element<typeof Column>, columnIndex: number, rowData: RowData, rowIndex: number }) => React.Node,
  
  /** Alignment of the column cell */
  align?: 'left' | 'center' | 'right',
  
  /** Flex grow style, defaults to 0 */
  flexGrow?: number,
  
  /** Flex shrink style, defaults to 1 for flexible table and 0 for fixed table */
  flexShrink?: number,
  
  /** The width of the column, gutter width is not included */
  width: number,
  
  /** Maximum width of the column, used if the column is resizable */
  maxWidth?: number,
  
  /** Minimum width of the column, used if the column is resizable */
  minWidth?: number,
  
  /** Whether the column is frozen and what's the frozen side */
  frozen?: 'left' | 'right' | true | false,
  
  /** Whether the column is hidden */
  hidden?: boolean,
  
  /** Whether the column is resizable, defaults to true */
  resizable?: boolean,
  
  /** Whether the column is sortable, defaults to true */
  sortable?: boolean,
  
  /** Custom column cell renderer. The renderer receives props `({ cellData, columns, column, columnIndex, rowData, rowIndex, container, isScrolling }) => React.Node` */
  cellRenderer?: ({ cellData: {}, columns: React.Element<typeof Column>[], column: React.Element<typeof Column>, columnIndex: number, rowData: RowData, rowIndex: number, container: any, isScrolling: boolean }) => React.Node | React.Node,
  
  /** Custom column header renderer The renderer receives props `({ columns, column, columnIndex, headerIndex, container }) => React.Node` */
  headerRenderer: ({ columns: React.Element<typeof Column>[], column: React.Element<typeof Column>, columnIndex: number, headerIndex: number, container: any }) => React.Node | React.Node,
};

export const Column = (props: Props) => (
  <BaseColumn {...props} />
);

export default Column;