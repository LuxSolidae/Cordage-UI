// @flow
import * as React from 'react';
import TabComponent from 'react-bootstrap/Tab';

export type Props = {
  eventKey: string,
  title: string,
  children?: React.Node,
}

const Tab = ({ children, ...props }: Props) => (
  <TabComponent {...props}>
    {children}
  </TabComponent>
);

Tab.defaultProps = {
  
}

export default Tab;