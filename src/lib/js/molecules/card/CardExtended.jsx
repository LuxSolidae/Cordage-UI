import React from 'react';
import { Accordion, Card, Button, Container, Col } from 'react-bootstrap';
import classnames from 'classnames';

export type Props = {
  title: String,
  image: String,
  content: String,
  subcontent: String,
};

const CardExtended = (props: Props) => {

  const {
    title,
    image,
    subtitle,
  } = props;

  return(
    <Accordion  defaultActiveKey="0">
    <Card>
      <Card.Header className='card-extended'>
        <Container className='d-flex'>
          <Col xs={10}>
            cosas
          </Col>
          <Col xs={2}>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              ...
            </Accordion.Toggle>
          </Col>
        </Container>
        <div>
          <p className='card-extended-info'>Mid-weight/senior designer to create status-quo-challenging design work across a wide range of media for marketing efforts, including large scale, high profile branded conferences and events, product launch campaigns, presentations, web content, ads, videos, infographics, DM and marketing material.</p>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body className='card-extended-body'>
        <Container className='d-flex'>
          <Col>
            <p className='card-extended-titles'>Seniority Level</p>
            <p className='card-extended-subtitles'>Not applicable</p>
          </Col>
          <Col>
            <p className='card-extended-titles'>Indusrty</p>
            <p className='card-extended-subtitles'>Financial Services</p>
          </Col>
          <Col>
            <p className='card-extended-titles'>Employment Type</p>
            <p className='card-extended-subtitles'>Temporary</p>
          </Col>
          <Col>
            <p className='card-extended-titles'>Job Functions</p>
            <p className='card-extended-subtitles'>Marketing</p>
          </Col>
          <Col>
            <p className='card-extended-titles'>Seniority Level</p>
            <p className='card-extended-subtitles'>Not applicable</p>
          </Col>
        </Container>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  )
}


export default CardExtended;
