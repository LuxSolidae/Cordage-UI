// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';

export type Props = {
  /** Url or data base 64 */
  icon?: string,
  /** Function to capture the inner ref */
  innerRef?: Function,
  /** Text, button or any component contained in the Link */
  children: React.Node,
  /** When true, clicking the link will replace the current entry in the history stack instead of adding a new one */
  replace: boolean,

  to: string |
    { 
      pathname: string,
      search: string,
      hash: string,
      state: { [key: string]: any }
    } |
    () => Location
}

const Link = ({ icon, replace, to, children }: Props) => (
  <NavLink className='sidebar-link' to={to} replace={replace}>
    <img src={icon} />
    {children}
  </NavLink>
);

Link.defaultProps = {
  icon: undefined,
  innerRef: undefined,
};

export default Link;