// @flow
import * as React from 'react';
import TabsComponent from 'react-bootstrap/Tabs';

export type Props = {
  defaultActiveKey?: string,
  id?: string,
  transition?: boolean,
  children?: React.Node,
}

const Tabs = ({ children, ...props }: Props) => (
  <TabsComponent {...props}>
    {children}
  </TabsComponent>
);

Tabs.defaultProps = {
  defaultActiveKey: undefined,
  id: undefined,
  transition: true,
  children: undefined,
}

export default Tabs;