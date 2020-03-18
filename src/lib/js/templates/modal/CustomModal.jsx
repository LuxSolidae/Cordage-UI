// @flow
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as React from 'react';

export type Props = {
  /** Header of the modal */
  header: string,
  /** Type of modal to be used (Success, Error, etc.) */
  variant?: 'success' | 'error' | 'confirm' |'danger',
  /** Text inside the modal. */
  info: string,
  /** Text inside the button. */
  buttonText: string,
};

const CustomModal = ( {header, variant, info, buttonText}: Props ) => {

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={variant}  onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal
        className='modal'
        dialogClassName='modal-container'
        keyboard
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <h3 className='modal-infotype'>Success</h3>
          {info}
        </Modal.Body>
      </Modal>
    </>
  );
}

CustomModal.defaultProps = {
  variant: 'success'
}

export default CustomModal;