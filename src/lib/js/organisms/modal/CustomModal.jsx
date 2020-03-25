// @flow
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ilusSuccess from '@_src_/lib/img/illustrations/modal-success.png';
import classnames from 'classnames';
import * as React from 'react';

export type Props = {
  /** Header of the modal */
  header: string,
  /** Text inside the modal. */
  content: string,
  /** Text inside the button. */
  buttonText: string,
  /** Type of notification. */
  type: string,
  /** Changes the background color of the modal (therefore the font's one too). */
  color: 'white' | 'dark',
};

export const CustomModal = ({ header, content, buttonText, type, color }: Props) => {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='success' onClick={handleShow}>
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
        <Modal.Header className={classnames('modal-header', `header-${ color }`)} closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={classnames('modal-body', `body-${ color }`)}>
        <div>
          <Image src={ ilusSuccess } fluid />
        </div>
          <h6 className={classnames('modal-message', `type-${ color }`)}>{type}</h6>
          {content}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;
