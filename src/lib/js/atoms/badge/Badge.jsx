// @flow
import * as React from 'react';
import BadgeComponent from 'react-bootstrap/Badge';

export type Props = {
  as?: string,
  pill?: boolean,
  variant?: 'primary' |
    'secondary' |
    'success' |
    'danger' |
    'warning' |
    'info' |
    'light' |
    'dark',
}

const Badge = (props: Props) => (
  <BadgeComponent {...props} />
);

Badge.defaultProps = {
  as: undefined,
  pill: undefined,
  variant: undefined,
}

export default Badge;
