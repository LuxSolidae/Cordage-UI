import React from 'react';
// import Button from './Button';
import { Card } from 'react-bootstrap';

export type Props = {
  title: String,
  content: String,
  subcontent: String,
  width: 'small' | 'large'
};

const CardComponent = (props: Props) => {

  const {
    title,
    content,
    subcontent,
    width,
  } = props;

  return(
  <Card style={{ width: '21.875rem', }}>
    <Card.Img className='card-image' variant="top" src='https://images.dog.ceo/breeds/terrier-australian/n02096294_4440.jpg'/>
      <Card.Body className='card small'>
      <Card.Title>{title}</Card.Title>
      <Card.Text className='card-content'>
        {content}
      </Card.Text>
      <div className='card-divider'></div>
      {/*FIXME Needs to use Button from Cordage. */}
      <a className='card-link' href='#'>{ subcontent }</a>
    </Card.Body>
  </Card>
  )
}

export default CardComponent;
