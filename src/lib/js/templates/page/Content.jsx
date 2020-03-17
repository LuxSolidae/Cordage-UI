import * as React from 'react';

type Props = {
  children: React.Node;
  className?: string;
}

export const Content = ({ children, className }: Props) => (
  <div className={`page-content ${className}`}>
    {children}
  </div>
);

Content.defaultProps = {
  className: '',
};

export default Content;
