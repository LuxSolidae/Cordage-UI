// @flow
import * as React from 'react';
import classnames from 'classnames';
import { t as typy } from 'typy';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Accordion from './Accordion';
import { SidebarContext, ThemeContext } from '../../providers';
import { Hide } from '../../atoms/icons';

export type Props = {
  logo: {
    src: string,
    alt: string,
  },
  zone?: string,
  children: React.ChildrenArray<React.Element<typeof Accordion>>,
};

const Menu = ({ logo, zone, children }: Props) => {
  const { open, toggleOpen } = React.useContext(SidebarContext.Context);
  const { theme } = React.useContext(ThemeContext.Context);
  return (
    <div className={classnames('sidebar-wrapper', { open })}>
      <button
        className='sidebar-toggler'
        style={typy(theme, 'sidebar.toggler').safeObject}
        onClick={toggleOpen}
      >
        <Hide />
      </button>
      <div
        className={classnames('sidebar')}
        style={typy(theme, 'sidebar.main').safeObject}
      >
        <Container>
          <Row className='sticky-head'>
            <Col className='sidebar-head'>
              <img src={typy(logo, 'src').safeString} alt={typy(logo, 'alt').safeString} />
              <span>{zone}</span>

              
            </Col>
          </Row>
          <Row>
            <div className='sidebar-body'>
              {children}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

Menu.defaultProps = {
  children: undefined
}

export default Menu;