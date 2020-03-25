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
  content: string,
  /** Text inside the button. */
  btnConfirm: string,
};

export const ConfirmationModal = ({ header, subheader, content, btnConfirm }: Props) => {

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click to open Confirmation Modal
      </Button>

      <Modal show={show} onHide={handleClose} animation centered>
        <div className='modal-confirm'>
          <Modal.Header closeButton>
            <Modal.Title>{ header }</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-confirm-body'>
            <h6>{subheader}</h6>
            { content }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              { btnConfirm }
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
