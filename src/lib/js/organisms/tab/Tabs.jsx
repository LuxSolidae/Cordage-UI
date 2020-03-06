// @flow
import * as React from 'react';
import TabsComponent from 'react-bootstrap/Tabs';

export type Props = {
  defaultActiveKey?: string,
  id?: string,
  children?: React.Node,
}

const Tabs = ({children, ...props}: Props) => (
  <TabsComponent {...props}>
    {children}
  </TabsComponent>
);

Tabs.defaultProps = {
  defaultActiveKey: undefined,
  id: undefined,
  children: undefined,
}

export default Tabs;