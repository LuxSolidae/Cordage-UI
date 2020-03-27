// @flow
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as React from 'react';
import { t as typy } from 'typy';

export type Props = {
  /** Header of the modal */
  header: string,
  /** Subheader of the modal */
  subheader: String,
  /** Text inside the modal. */
  children: string,
  /** Should the modal be visible? */
  show?: boolean,
  /** onClose callback */
  onClose?: Function,

  primaryAction?: {
    text: string,
    onClick: Function,
  },
  secondaryAction?: {
    text: string,
    onClick: Function,
  },
};

export const GenericModal = ({
  header, subheader, children, show,
  onClose, primaryAction, secondaryAction,
}: Props) => (
  <Modal
    show={show}
    onHide={onClose}
    animation
    centered
  >
    <div className='modal-confirm'>
      <Modal.Header closeButton>
        <Modal.Title>{ header }</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-confirm-body'>
        <h6>{subheader}</h6>
        { children }
      </Modal.Body>

      <Modal.Footer>
        {
          secondaryAction && (
            <Button
              variant='secondary'
              onClick={typy(secondaryAction, 'onClick').safeFunction}
            >
              {typy(secondaryAction, 'text').safeString}
            </Button>
          )
        }
        {
          primaryAction && (
            <Button
              variant='primary'
              onClick={typy(primaryAction, 'onClick').safeFunction}
            >
              {typy(primaryAction, 'text').safeString}
            </Button>
          )
        }
      </Modal.Footer>
    </div>
  </Modal>
);

GenericModal.defaultProps = {
  show: false,
  primaryAction: undefined,
  secondaryAction: undefined,
};

export default GenericModal;
