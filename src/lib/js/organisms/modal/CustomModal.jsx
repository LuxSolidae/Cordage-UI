// @flow
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classnames from 'classnames';
import * as React from 'react';

export type Props = {
  /** Header of the modal */
  header: string,
  /** Text inside the modal. */
  content: string,
  /** Text inside the button. */
  buttonText: string,
  /** Type of notification */
  type: string,
};

export const CustomModal = ({header, content, buttonText, type}: Props) => {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='success'  onClick={handleShow}>
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
        <Modal.Header className={classnames('modal-header')} closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-content'>
          <h3 className='modal-type'>{type}</h3>
          {content}
        </Modal.Body>
      </Modal>
    </>
  );
};

CustomModal.defaultProps ={
  header: 'Header',
  content: '',
  buttonText: 'Click to open modal',
  type: 'Success!',
}

export default CustomModal;
