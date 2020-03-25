import React from 'react';
import { Accordion, Card, Button, Container, Col } from 'react-bootstrap';
import points from '@_src_/lib/img/icons/more-points.svg';
import classnames from 'classnames';

export type Props = {
  jobTitle:  String,
  jobPlace:  String,
  jobDescription: String,
  seniorityLevel: String,
  industry: String,
  employmentType: String,
  jobFunctions: String
};

const CardExtended = (props: Props) => {

  const {
    jobTitle,
    jobPlace,
    jobDescription,
    seniorityLevel,
    industry,
    employmentType,
    jobFunctions
  } = props;

  return(
    <Accordion  defaultActiveKey="0">
    <Card>
      <Card.Header className='card-extended'>
        <div className='card-ext-header-wrapper'>
        <div className='d-flex'>
          <img className='card-extended-image' src='https://images.dog.ceo/breeds/clumber/n02101556_6883.jpg' alt='profile image' />
          <div>
            <p className='card-ext-jobTitle'>{ jobTitle }</p>
            <p className='card-ext-place'>{ jobPlace }</p>
          </div>
        </div>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <img src={points} alt='Expand' />
          </Accordion.Toggle>
        </div>
        <div>
          <p className='card-extended-info'>
            { jobDescription }
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
