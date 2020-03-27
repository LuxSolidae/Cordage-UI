import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import classnames from 'classnames';
import { t as typy } from 'typy';

export type Props = {
  /**Tittle of the card */
  title?: String,
  // /**String of img to fetch (url) */
  img?: String,
  /**Content inside card. */
  children?: React.Node,

  /** A link */
  link?: {
    text?: string,
    onClick?: Function,
  },
};

export const Card = ({
  title,
  img,
  children,
  link,
}: Props) => (
  <BootstrapCard className={'card-component'}>
    {
      img && (
        <BootstrapCard.Img className='card-image' variant="top" src={ img }/>
      )
    }
    <BootstrapCard.Body className='card small'>
      <BootstrapCard.Title>{title}</BootstrapCard.Title>
      <BootstrapCard.Text className='card-content'>
        {children}
      </BootstrapCard.Text>
      {
        link.text && link.onClick && (
          <>
            <div className='card-divider'></div>
            <Button
              className='card-link'
              variant='link'
              onClick={link.onClick}
            >
              {link.text}
            </Button>
          </>//
        )
      }
    </BootstrapCard.Body>
  </BootstrapCard>
);

Card.defaultProps = {
  title: '',
  img: undefined,
  children: '',
  link: {
    text: undefined,
    onClick: () => {},
  },
};


export default Card;
