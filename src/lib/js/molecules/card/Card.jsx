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
  action?: {
    text?: string,
    onClick?: Function,
    variant?: string,
  },
};

export const Card = ({
  title,
  img,
  children,
  action,
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
        action && (
          <>
            <div className='card-divider'></div>
            <Button
              className='card-action'
              variant={typy(action, 'variant').safeString}
              onClick={typy(action, 'onClick').safeFunction}
            >
              {typy(action, 'text').safeString}
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
  action: undefined,
};


export default Card;
