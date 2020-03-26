import React from 'react';
import { Accordion, Card, Button, Container, Col } from 'react-bootstrap';
import points from '@_src_/lib/img/icons/more-points.svg';

export type Props = {
  title?:  String,
  img?: String,
  location?:  String,
  description?: String,
  seniorityLevel?: String,
  industry?: String,
  employmentType?: String,
  jobFunctions?: String,
  onApply?: Function,
};

export const CardExtended = (props: Props) => {

  const {
    title,
    img,
    location,
    description,
    seniorityLevel,
    industry,
    employmentType,
    jobFunctions,
    onApply
  } = props;

  return(
    <Accordion  defaultActiveKey="0">
    <Card>
      <Card.Header className='card-extended'>
        <div className='card-ext-header-wrapper'>
        <div className='d-flex'>
          <img className='card-extended-image' src={ img } alt='profile image' />
          <div>
            <p className='card-ext-jobTitle'>{ title }</p>
            <p className='card-ext-place'>{ location }</p>
          </div>
        </div>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <img src={points} alt='Expand' />
          </Accordion.Toggle>
        </div>
        <div>
          <p className='card-extended-info'>
            { description }
          </p>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body className='card-extended-body'>
        <Container className='d-flex'>
          <Col>
            <p className='card-extended-titles'>Seniority Level</p>
            <p className='card-extended-subtitles'>{ seniorityLevel }</p>
          </Col>
          <Col>
            <p className='card-extended-titles'>Indusrty</p>
            <p className='card-extended-subtitles'>{ industry }</p>
          </Col>
          <Col>
            <p className='card-extended-titles'>Employment Type</p>
            <p className='card-extended-subtitles'>{ employmentType }</p>
          </Col>
          <Col>
            <p className='card-extended-titles'>Job Functions</p>
            <p className='card-extended-subtitles'>{ jobFunctions }</p>
          </Col>
          <Col >
            <Button variant="primary" size='lg' style={{ width: '100%' }} onClick={ onApply }>Apply</Button>
          </Col>
        </Container>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  )
}

CardExtended.defaultProps = {
  title: '',
  img: '',
  location: '',
  description: '',
  seniorityLevel: '',
  industry: '',
  employmentType: '',
  jobFunctions: '',
  onApply: () => {},
};


export default CardExtended;
