import React from 'react';
import { Card } from 'react-bootstrap';
import classnames from 'classnames';

export type Props = {
  /**Tittle of the card */
  title?: String,
  // /**String of img to fetch (url) */
  img?: String,
  /**Content inside card. */
  children?: React.Node,
  /**Text of of the link */
  linkText?: String,
  /**URL inside the link to go. */
  linkHref: String,
};

export const CardComponent = (props: Props) => {

  const {
    title,
    img,
    children,
    linkText,
    linkHref,
  } = props;

  return(
  <Card className={'card-component'}>
    <Card.Img className='card-image' variant="top" src={ img }/>
      <Card.Body className='card small'>
      <Card.Title>{title}</Card.Title>
      <Card.Text className='card-content'>
        {children}
      </Card.Text>
      <div className='card-divider'></div>
      <a className='card-link' href={linkHref}>{ linkText }</a>
    </Card.Body>
  </Card>
  )
}

CardComponent.defaultProps = {
  title: '',
  img: '',
  children: '',
  linkText: '',
  linkHref: '',
};


export default CardComponent;
