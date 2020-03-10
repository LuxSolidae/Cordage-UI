// @flow
import * as React from 'react';
import TabsComponent from 'react-bootstrap/Tabs';

export type Props = {
  /** Mark the Tab with a matching `eventKey` as active. Controlled by: `onSelect`, Initial prop: `defaultActivekey` */
  activeKey?: string,
  /** By default, mark the Tab with a matching `eventKey` as active. */
  defaultActiveKey?: string,
  /** HTML id attribute, required if no generateChildId prop is specified. */
  id?: string,
  /** Wait until the first "enter" transition to mount tabs (add them to the DOM) */
  mountOnEnter?: boolean,
  /** Callback fired when a Tab is selected. Controls `activeKey` */
  onSelect?: (key: string, event?: SyntheticEvent<>) => void,
  /** Sets a default animation strategy for all children `<TabPane>`s. Use `false` to disable, 
   * `true` to enable the default `<Fade>` animation or a `react-transition-group v2 <Transition/>` component. */
  transition?: Transition | false,
  children?: React.Node,
}

const Tabs = ({ children, ...props }: Props) => (
  <TabsComponent {...props}>
    {children}
  </TabsComponent>
);

Tabs.defaultProps = {
  activeKey: undefined,
  defaultActiveKey: undefined,
  onSelect: undefined,
  id: undefined,
  transition: undefined,
  children: undefined,
}

export default Tabs;