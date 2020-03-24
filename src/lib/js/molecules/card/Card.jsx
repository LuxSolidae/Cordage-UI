import React from 'react';
import {Card, Button} from 'react-bootstrap';

export type Props = {
  title: String,
  content: String,
  subcontent: String,
};

const CardComponent = (props: Props) => {

  const {
    title,
    content,
    subcontent
  } = props;

  return(
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top"/>
      <Card.Body className='card'>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {content}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default CardComponent;