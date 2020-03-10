// @flow
import * as React from 'react';
import TabContent from 'react-bootstrap/TabContent';

export type Props = {
  /** You can use a custom element type for this component. */
  as?: elementType,
  children?: React.Node,
}

const Content = ({ children, ...props }: Props) => (
  <TabContent {...props}>
    {children}
  </TabContent>
);

Content.defaultProps = {
  children: undefined,
}

export default Content;