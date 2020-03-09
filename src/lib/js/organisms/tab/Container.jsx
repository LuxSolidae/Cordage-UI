// @flow
import * as React from 'react';
import TabContainerComponent from 'react-bootstrap/TabContainer';

export type Props = {
  /** Mark the Tab with a matching `eventKey` as active. Controlled by: `onSelect`, Initial prop: `defaultActivekey` */
  activeKey?: string,
  /** By default, mark the Tab with a matching `eventKey` as active. */
  defaultActiveKey?: string,
  /** A function that takes an `eventKey` and `type` and returns a unique id for child tab `<NavItem>`s and `<TabPane>`s.
   *  The function must be a pure function, meaning it should always return the same id for the same set of inputs. The
   *  default value requires that an id to be set for the `<TabContainer>`. */
  generateChildId?: (eventKey: string, type: 'tab' | 'pane') => string,
  /** HTML id attribute, required if no generateChildId prop is specified. */
  id?: string,
  /** Wait until the first "enter" transition to mount tabs (add them to the DOM) */
  mountOnEnter?: boolean,
  /** Callback fired when a Tab is selected. Controls `activeKey` */
  onSelect?: (key: string, event?: SyntheticEvent<>) => void,
  /** Sets a default animation strategy for all children `<TabPane>`s. Use `false` to disable, 
   * `true` to enable the default `<Fade>` animation or a `react-transition-group v2 <Transition/>` component. */
  transition?: Transition | false,
  /** Unmount tabs (remove it from the DOM) when they are no longer visible */
  unmountOnExit?: boolean,
  children?: React.Node,
}

const Tab = ({ children, ...props }: Props) => (
  <TabContainerComponent {...props}>
    {children}
  </TabContainerComponent>
);

Tab.defaultProps = {
  children: undefined,
}

export default Tab;