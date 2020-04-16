// @flow
import * as React from 'react';
import TabContent from 'react-bootstrap/TabContent';
import Pane from './Pane';

export type Props = {
  /** You can use a custom element type for this component. */
  as?: elementType,
  /** Children can only be `Tab.Pane` elements. */
  children?: React.ChildrenArray<React.Element<typeof Pane>>,
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