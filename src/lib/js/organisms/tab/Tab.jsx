// @flow
import * as React from 'react';
import TabComponent from 'react-bootstrap/Tab';

export type Props = {
  eventKey: string,
  title: string,
  disabled?: boolean,
  children?: React.Node,
}

const Tab = ({ children, ...props }: Props) => (
  <TabComponent {...props}>
    {children}
  </TabComponent>
);

Tab.defaultProps = {
  disabled: false,
}

export default Tab;