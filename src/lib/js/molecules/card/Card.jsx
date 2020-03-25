import React from 'react';
import { Card } from 'react-bootstrap';
import classnames from 'classnames';

export type Props = {
  /**Tittle of card */
  title: String,
  /**String of image to fetch */
  image: String,
  /**Text inside card. */
  content: String,
  /**Subcontent (link) */
  subcontent: String,
};

const CardComponent = (props: Props) => {

  const {
    title,
    image,
    content,
    subcontent,
  } = props;

  return(
  <Card className={classnames('card-component')}>
    <Card.Img className='card-image' variant="top" src={ image }/>
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
