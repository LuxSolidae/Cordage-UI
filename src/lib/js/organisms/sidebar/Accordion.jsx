// @flow
import * as React from 'react';

export type Props = {
  children: React.Node,
}

const Accordion = ({ children }: Props) => (
  <div className='sidebar-accordion'>
    {children}
  </div>
);

Accordion.defaultProps = {

};

export default Accordion;