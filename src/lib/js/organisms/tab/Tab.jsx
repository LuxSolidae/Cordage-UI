// @flow
import * as React from 'react';
import TabComponent from 'react-bootstrap/Tab';

export type Props = {
  /** A key that associates the children `TabPane` with it's controlling `NavLink`. */
  eventKey: string,
  /** The title to be shown inside the controlling `NavLink` */
  title: React.Node,
  /** Disabled the controlling `NavLink` */
  disabled?: boolean,
  children?: React.Node,
}

const Tab = ({ children, ...props }: Props) => (
  <TabComponent {...props}>
    {children}
  </TabComponent>
);

Tab.defaultProps = {
  children: undefined,
}

export default Tab;