// @flow
import * as React from 'react';

export type Props = {
  text: string,
  children: React.Node,
}

const Section = ({ text, children }: Props) => (
  <div className='sidebar-section'>
    <span className="section-text">{text}</span>
    {children}
  </div>
);

Section.defaultProps = {

};

export default Section;