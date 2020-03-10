// @flow
import * as React from 'react';
import TabPaneComponent from 'react-bootstrap/TabPane';

export type Props = {
  /** Toggles the active state of the TabPane, this is generally controlled by a TabContainer. */
  active?: boolean,
  /** You can use a custom element type for this component. */
  arialabelledby?: string,
  /** A key that associates the TabPane with it's controlling `NavLink`. */
  eventKey?: any,
  id?: string,
  /** Wait until the first "enter" transition to mount the tab (add it to the DOM) */
  mountOnEnter?: boolean,
  /** Transition onEnter callback when animation is not false */
  onEnter?: Function,
  /** Transition onEntered callback when animation is not false */
  onEntered?: Function,
  /** Transition onEntering callback when animation is not false */
  onEntering?: Function,
  /** Transition onExit callback when animation is not false */
  onExit?: Function,
  /** Transition onExited callback when animation is not false */
  onExited?: Function,
  /** Transition onExiting callback when animation is not false */
  onExiting?: Function,
  /** Use animation when showing or hiding <TabPane>s. Use false to disable, true to enable the default <Fade> animation or a react-transition-group v2 <Transition/> component. */
  transition?: boolean | elementType,
  /** Unmount the tab (remove it from the DOM) when it is no longer visible */
  unmountOnExit?: boolean,

  children?: React.Node,
}


const Pane = ({ children, ...props }: Props) => (
  <TabPaneComponent {...props}>
    {children}
  </TabPaneComponent>
);

Pane.defaultProps = {
  children: undefined,
}

export default Pane;