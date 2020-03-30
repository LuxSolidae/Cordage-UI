// @flow
import * as React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
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

export const Modal = ({
  header, subheader, children, show,
  onClose, primaryAction, secondaryAction,
}: Props) => (
  <BootstrapModal
    show={show}
    onHide={onClose}
    animation
    centered
  >
    <div className='modal-confirm'>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{ header }</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body className='modal-confirm-body'>
        <h6>{subheader}</h6>
        { children }
      </BootstrapModal.Body>

      <BootstrapModal.Footer>
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
      </BootstrapModal.Footer>
    </div>
  </BootstrapModal>
);

Modal.defaultProps = {
  show: false,
  primaryAction: undefined,
  secondaryAction: undefined,
};

export default Modal;
