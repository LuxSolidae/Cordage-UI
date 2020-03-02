// @flow
import * as React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from './Button';

export type Props = {
  children: React.ChildrenArray<React.Element<typeof Button>>,
}

export default ButtonToolbar;
