import React from 'react';
import { Accordion, Card, Button, Container, Col } from 'react-bootstrap';
import { t as typy } from 'typy';
import points from '@_src_/lib/img/icons/more-points.svg';

export type Props = {
  img?: String,
  title?:  String,
  subtitle?:  String,
  children?: React.node,

  fields?: {
    title: string,
    description: string,
  }[],

  action?: {
    text?: string,
    onClick?: Function,
  },
};

export const CardExtended = ({
  title, img, subtitle, children,
  fields, action,
}: Props) => (
  <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header className='card-extended'>
        <div className='card-ext-header-wrapper'>
        <div className='d-flex'>
          {
            img && (
              <img className='card-extended-image' src={ img } alt='profile image' />
            )
          }
          <div>
            <p className='card-ext-jobTitle'>{ title }</p>
            {
              subtitle && (
                <p className='card-ext-place'>{ subtitle }</p>
              )
            }
          </div>
        </div>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <img src={points} alt='Expand' />
          </Accordion.Toggle>
        </div>
        <div>
          <p className='card-extended-info'>
            { children }
          </p>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body className='card-extended-body'>
          <Container className='d-flex'>
            {
              fields.map((field, index) => (
                <Col key={`field-${index}`}>
                  <p className='card-extended-titles'>{typy(field, 'title').safeString}</p>
                  <p className='card-extended-subtitles'>{typy(field, 'description').safeString}</p>
                </Col>
              ))
            }

            {
              action.text && action.onClick && (
                <Col>
                  <Button variant="primary" size='lg' style={{ width: '100%' }} onClick={action.onClick}>{action.text}</Button>
                </Col>
              )
            }
          </Container>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

CardExtended.defaultProps = {
  title: '',
  img: undefined,
  subtitle: undefined,
  children: '',
  
  fields: [],
  action: {
    text: undefined,
    onClick: () => {},
  },
};


export default CardExtended;
