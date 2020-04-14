import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

type Props = {
  children: React.Node,
  title?: string,
  extras?: React.Node,
  className?: string,
}


export const Content = ({ children, className, title, extras }: Props) => (
  <div className={`page-content ${className}`}>
          <div className='page-content-header'>
            {
              title && (
                <h2 className='content-title'>{title}</h2>
              )
            }
            {
              extras && (
                <div className='page-header-right'> {extras} </div>
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
