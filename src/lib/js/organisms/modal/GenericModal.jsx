// @flow
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as React from 'react';

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
  /** Should the modal show footer buttons? */
  showButtons: Boolean,
  /** onClose callback */
  onCancel?: Function,
  /** onConfirm callback */
  onConfirm?: Function,
  /** Text inside the cancel button. */
  btnCancel?: string,
  /** Text inside the confirmation button. */
  btnConfirm: string,
};

export const GenericModal = ({
  header, subheader, children, show,
  onClose, showButtons, onCancel, onConfirm, btnCancel, btnConfirm,
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

      {showButtons === true &&
        <Modal.Footer>
        <Button variant='secondary' onClick={onCancel}>
        {btnCancel}
        </Button>

        <Button variant='primary' onClick={onConfirm}>
        { btnConfirm }
        </Button>
    </Modal.Footer>
      }


    </div>
  </Modal>
);

GenericModal.defaultProps = {
  btnCancel: undefined,
  show: false,
  showButtons: false,
};

export default GenericModal;
