import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

type Props = {
  children: React.Node,
  title?: string,
  /**May add any component next to the header. Should be inside a fragment. */
  headerComponents?: React.Node,
  className?: string,
}


export const Content = ({ children, className, title, headerComponents }: Props) => (
  <div className={`page-content ${className}`}>
          <div className='page-content-header'>
            {
              title && (
                <h2 className='content-title'>{title}</h2>
              )
            }
            {
              headerComponents && (
                <div className='page-header-right'> {headerComponents} </div>
              )
            }
          </div>
    {children}
  </div>
);

Content.defaultProps = {
  className: '',
  title: undefined
};

export default Content;
