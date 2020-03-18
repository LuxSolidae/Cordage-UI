import * as React from 'react';

type Props = {
  children: React.Node,
  title?: string,
  className?: string,
}

export const Content = ({ children, className, title }: Props) => (
  <div className={`page-content ${className}`}>
    {
      title && (
        <h2 className='content-title'>{title}</h2>
      )
    }
    {children}
  </div>
);

Content.defaultProps = {
  className: '',
  title: undefined
};

export default Content;
